/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Button from "./Button";
import Modal from "./Modal";
import axios from "axios";
import { useState, useEffect, useCallback } from 'react'
import {signOut} from 'next-auth/react'
import useCurrentUser from "@/hooks/useCurrentUser";
import toast from "react-hot-toast";

const Header = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { currentUser,isAuthenticated } = useCurrentUser()

  const onSubmit = useCallback(async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    try {
      await axios.post('/api/register', {
        name,
        email,
        password
      })
      toast.success('User created successfully')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }, [name, email, password])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])
  return (
    <div className="header w-full flex mb-6 items-center">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo h-7 max-w-[140px] mr-6 ml-16"
      />
      <div className="header-right flex flex-1 justify-between items-center h-16">
        <div className="header-location-search-container 
        flex h-[3.5rem] rounded-sm w-[70%]
        items-center border-r-4">
          <div className="location-wrapper flex flex-1 
          justify-between px-2 py-0">
            <div className="location-icon-name flex">
              <i className="fi fi-rr-marker flex items-center justify-center location-icon"></i>
              <div>Bangalore</div>
            </div>
            <i className="fi fi-rr-caret-down flex items-center justify-center"></i>
          </div>
          <div className="location-search-separator h-5 "></div>
          <div className="header-searchBar flex flex-[2]">
            <i className="fi fi-rr-search flex items-center 
            justify-center search-icon"></i>
            <input
              className="search-input border-none 
              w-full font-sm outline-none"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>



        <div className="profile-wrapper flex gap-4 w-[15%] items-center mr-20">
          {
            !isAuthenticated ? (
              <div>
                <Modal
                  buttonLabel='login'
                >
                  <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4">
                    <input
                      type="text"
                      placeholder="Email"
                      className="border-2 border-gray-300 p-2 rounded-md"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="border-2 border-gray-300 p-2 rounded-md"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                      label="Login"
                      onClick={() => { }}
                    // className="bg-zomato-400 text-white"
                    />
                  </form>
                </Modal>
              </div>
            )
              : (
                <div>
                  <button onClick={() => { 
                    signOut()
                    toast.success('User logged out successfully')
                  }}>Logout</button>
                </div>
              )
        }
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image rounded-full h-9 w-9"
            alt="Profile"
          />
          <span
            className="header-username font-md font-bold cursor-pointer">
            {currentUser?.name}
          </span>
          <i className="fi fi-rr-angle-small-down flex items-center justify-center
           profile-options-icon font-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
