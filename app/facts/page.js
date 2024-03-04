"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const facts = () => {

  const [cards,setCards] = useState([])
  const [NPages,setNPages] = useState()
  const [currentPage,setCurrentPage]=useState(1)
  const [loading,setLoading] = useState(true) 

  useEffect(()=>{

    const getFacts = async ()=>{
    const res =await axios.get('https://catfact.ninja/facts?page=1')

    console.log("data : ",res.data.data)
    setCards(res.data.data)
    setNPages(res.data.last_page)
    setLoading(false)

    }

    getFacts();
},[])

const fetchFacts = async (currentPage)=>{
  const res =await axios.get(`https://catfact.ninja/facts?page=${currentPage}`)

  console.log("fetchFacts data : ",res.data.data)
  return res.data.data
  }

  const handlePageClick= async (data)=>{
    setLoading(true)
    console.log("data. : ",data)
    console.log("data.selected : ",data.selected+1)
    let currentPage = data.selected+1
    const CardsFromServer = await fetchFacts(currentPage)
    setCards(CardsFromServer)
    setCurrentPage(currentPage)
    setLoading(false)
}

return (
  <div>
    {loading?<span className='flex justify-center mt-36' id='loader'></span>:<>
    <div className='grid grid-cols-3 gap-4  bg-[#F3F4F6] p-6'>
      {cards.map((item,index)=>{
        return(       
        <section className="">
        <div className="container">
           <div className="">
              <div className="px-4">
                 <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                       <h3
                             className="
                             font-semibold
                             text-dark text-xl
                             mb-4  
                             hover:text-primary
                             "
                             >
                               {item.fact}
                       </h3>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>)
      })}
     
    </div>
    <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={NPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'flex h-100 w-full items-center inline-flex justify-center mb-8 mt-4'}
            pageLinkClassName={'border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'}
            previousLinkClassName='border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'
            nextLinkClassName={'border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'}
            activeClassName={'bg-blue-200 py-2 text-white hover:bg-blue-100 hover:text-blue-700 rounded-l-lg'}
            forcePage={currentPage -1} 
/>   
</>}
    </div>

  )
}

export default facts