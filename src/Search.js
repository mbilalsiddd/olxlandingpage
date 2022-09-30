import React, {useState} from 'react';
import data from './data';

const Search = () => {
const[filter, setfilter] = useState('');
const searchText = (event) =>{
    setfilter(event.target.value)
} 

// let datasearch = data.cardData.filter(item =>{
//     return Object.keys(item).some(key => 
//     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
//         )
// });   

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className='col-12 mb-5'>
                    <div className='col-4 mb-3 mx-auto text-center'>
                        <label form-label h4>Search</label>
                        <input
                        tyoe="text"
                        className='form-control'
                        value={filter}
                        // onChange={searchText.bind(this)}
                        
                        />

                    </div>

               </div>

                {data.cardData.map((item, index) => {
                    return (
                        <div className="col-md-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card py-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className='card-img-top' />
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </section>
    );
}

export default Search;