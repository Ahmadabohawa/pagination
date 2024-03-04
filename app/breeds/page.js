"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import ReactPaginate from 'react-paginate'

const paginate = () => {
    const [items,setItems] = useState([]);
    const [NPages,setNPages] = useState()
    const [loading,setLoading] = useState(true)    
    useEffect(()=>{
        const getReeds = async ()=>{
        const res =await axios.get('https://catfact.ninja/breeds?page=1')

        console.log("data : ",res.data.last_page)
        setNPages(res.data.last_page)
        setItems(res.data.data)
        setLoading(false)
        }

        getReeds();
    },[])


    const fetchGreeds = async (currentPage)=>{
        const res =await axios.get(`https://catfact.ninja/breeds?page=${currentPage}`)

        console.log("data : ",res.data.data)

        return res.data.data
        }

        const handlePageClick= async (data)=>{
            console.log(data.selected)
            let currentPage = data.selected+1
            const greedsFromServer = await fetchGreeds(currentPage)
            setItems(greedsFromServer)
        }

    return (
    <div >
      {loading?<span className='flex justify-center mt-36' id='loader'></span>:<>
      <div>
        <section className="bg-white ml-10 py-20 lg:py-[120px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
            <thead>
              <tr className="bg-primary text-center" style={{backgroundColor:"lightblue"}}>
                <th
                  className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     border-l border-transparent
                     "
                >
                  Breed
                </th>
                <th
                  className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                >
                  Country
                </th>
                <th
                  className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                >
                  origin
                </th>
                <th
                  className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                >
                  Coat
                </th>
                <th
                  className="
                     w-1/6
                     min-w-[160px]
                     text-lg
                     font-semibold
                     text-white
                     py-4
                     lg:py-7
                     px-3
                     lg:px-4
                     "
                >
                  Pattern
                </th>
              </tr>
            </thead>
      {items.map((item,index)=>
     
        <tbody >
              <tr>
                <td
                  className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-l border-[#E8E8E8]
                     "
                >
                  {item.breed?item.breed:<span>null</span>}
                </td>
                <td
                  className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-white
                     border-b border-[#E8E8E8]
                     "
                >
                  {item.country?item.country:<span>null</span>}
                </td>
                <td
                  className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-[#E8E8E8]
                     "
                >
                 {item.origin?item.origin:<span>null</span>}
                </td>
                <td
                  className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-white
                     border-b border-[#E8E8E8]
                     "
                >
                 {item.coat?item.coat:<span>null</span>}
                </td>
                <td
                  className="
                     text-center text-dark
                     font-medium
                     text-base
                     py-5
                     px-2
                     bg-[#F3F6FF]
                     border-b border-[#E8E8E8]
                     "
                >
                 {item.pattern?item.pattern:<span>null</span>}
                </td>
              </tr>
            </tbody>
      )}    
          </table>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={NPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'flex h-100 w-full items-center inline-flex justify-center mb-8'}
            pageLinkClassName={'border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'}
            previousLinkClassName='border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'
            nextLinkClassName={'border border-blue-300 text-blue-500 hover:bg-blue-100 hover:text-blue-700 ml-0 rounded-l-lg leading-tight py-2 px-3'}
            activeClassName={'bg-blue-200 py-2 text-white hover:bg-blue-100 hover:text-blue-700 rounded-l-lg'} 
/>    
    </>}
      

    </div>
  )
}

export default paginate 