import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Dashboard.css'
import Navbar2 from '../../components/Navbar/Navbar2'
import bin from '../../assets/bin2.png'

const Dashboard = () => {

  const [classbookings , setClassBookings] = useState([]);
  const [enquiry , setEnquiry] = useState([]);
  const [newsletter , setNewsLetter] = useState([]);

  const getClassBookingsData = async() => {
    try {
      const res = await axios.get("http://localhost:8000/admin/bookings")
      setClassBookings(res.data.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  const getEnquiryData = async() => {
    try {
      const res = await axios.get("http://localhost:8000/admin/enquiries")
      setEnquiry(res.data.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  const getNewsLetterData = async() => {
    try {
      const res = await axios.get("http://localhost:8000/admin/newsletters")
      setNewsLetter(res.data.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  const deleteBookingsData = async(id) => {
    try {
      await axios.delete(`http://localhost:8000/admin/delete-bookings/${id}`)
      getClassBookingsData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  const deleteEnquiryData = async(id) => {
    try {
      await axios.delete(`http://localhost:8000/admin/delete-enquiry/${id}`)
      getEnquiryData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  const deleteNewsletterData = async(id) => {
    try {
      await axios.delete(`http://localhost:8000/admin/delete-newsletter/${id}`)
      getNewsLetterData();
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  useEffect(() => {
    getClassBookingsData()
    getEnquiryData()
    getNewsLetterData()
  }, [])

  return (
    <div>
      <Navbar2 />

      <div className="dashboard40">
        <h1 className="dashboard-title40">Admin Dashboard</h1>

        <div className="dashboard-grid40">

          <section className="dashboard-section40">
            <h2 className="dashboard-section-title40">
              Class Bookings <span>({classbookings.length})</span>
            </h2>

            <div className="dashboard-list40">
              {classbookings.map((item, index) => (
                <div className="dashboard-card40" key={index}>
                  <img
                    src={bin}
                    onClick={() => deleteBookingsData(item._id)}
                    alt="delete"
                    className="dashboard-bin40"
                  />

                  <div className="dashboard-card-header40">
                    <span className="dashboard-name40">{item.name}</span>
                    <span className="dashboard-date40">{item.date}</span>
                  </div>

                  <div className="dashboard-card-body40">
                    <div><strong>Phone:</strong> {item.phone}</div>
                    <div><strong>Timings:</strong> {item.timings}</div>
                    <div><strong>Center:</strong> {item.center}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-section40">
            <h2 className="dashboard-section-title40">
              Enquiries <span>({enquiry.length})</span>
            </h2>

            <div className="dashboard-list40">
              {enquiry.map((item, index) => (
                <div className="dashboard-card40" key={index}>
                  <img
                    src={bin}
                    onClick={() => deleteEnquiryData(item._id)}
                    alt="delete"
                    className="dashboard-bin40"
                  />

                  <div className="dashboard-card-header40">
                    <span className="dashboard-name40">{item.fullname}</span>
                    <span className="dashboard-date40">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="dashboard-card-body40">
                    <div><strong>Email:</strong> {item.email}</div>
                    <div><strong>Phone:</strong> {item.phone}</div>
                    <p className="dashboard-message40">{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-section40">
            <h2 className="dashboard-section-title40">
              Newsletter Subscribers <span>({newsletter.length})</span>
            </h2>

            <div className="dashboard-list40">
              {newsletter.map((item, index) => (
                <div className="dashboard-card40 compact40" key={index}>
                  <img
                    src={bin}
                    onClick={() => deleteNewsletterData(item._id)}
                    alt="delete"
                    className="dashboard-bin40"
                  />

                  <span className="dashboard-email40">{item.email}</span>
                  <span className="dashboard-date40">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
