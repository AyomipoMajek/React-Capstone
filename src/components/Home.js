import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const [filter, setFilter] = useState('');
  const data = useSelector((state) => state.Data.info);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((info) => info.date.includes(filter));

  return (
    <div className="home">
      <div className="form">
        <input type="text" placeholder="Filter by year" onChange={handleFilterChange} />
      </div>
      <div>
        <p className="title">ALL STATS:</p>
      </div>
      {filteredData.map((data) => (
        <div className="each" key={data.id}>
          <h3 className="date">{data.date}</h3>
          <div className="detail">
            <p className="info">
              Total revenue globally:
              <pre>{data.total}</pre>
            </p>
            <Link to={`card/${data.id}`}>
              <i className="fa-solid fa-circle-arrow-right" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
