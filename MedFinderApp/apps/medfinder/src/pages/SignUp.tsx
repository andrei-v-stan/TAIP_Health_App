import React, { useState } from 'react';
import axios from 'axios';
import "../styles/SignUp.css"
import Cookies from 'js-cookie';

const SignUpPage: React.FC = () => {
    const userId = Cookies.get('userId');
    if(userId){
        window.location.href = '/';
    }else{
        const [formData, setFormData] = useState({
            username: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            nickname: '',
            birthday: '',
            weight: '',
            height: '',
            gender: '',
          });
    
          const [isLoading, setIsLoading] = useState(false);
    
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
          };
    
            const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
                const { name, value } = e.target;
                setFormData((prevData) => ({ ...prevData, [name]: value }));
            };
        
          const handleSignUp = async () => {
            try {
                setIsLoading(true); // Set loading state to true before starting the signup process
    
                const response = await axios.post('http://localhost:3000/api/users/signup', formData);
                if(response.data == "success"){
                    // Handle success, redirect, or perform other actions here
                    // Redirect to the main page after signup
                    window.location.href = '/login';
                }else{
                    alert(response.data);
                }
               
            } catch (error: any) {
                console.error('Signup failed', error.response.data);
                // Handle errors and provide feedback to the user here
                alert(error.response.data.message);
            }finally {
                setIsLoading(false); // Reset loading state after the signup process is complete
            }
          };
    
      return (
        <div>
          <div className='top_logo'>
            <a href='/' className='home_page_link'>
                Med <img src='/src/assets/signup/Logo.svg' /> Finder
            </a>
          </div>
          <div className='form_wrapper'>
            <div className='form_title'>
                Create your account
            </div>
            <div className='sections_wrapper'>
                <div className='left_section'>
                    <div className='section_title'>
                        General details
                    </div>
                    <div className='input_wrapper large_input'>
                        <img src='/src/assets/signup/User.svg' />
                        <input 
                            type='text'                        
                            placeholder='Enter a username'
                            name='username'
                            value={formData.username}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className='input_wrapper large_input'>
                        <img src='/src/assets/signup/At.svg' />
                        <input 
                            type='email' 
                            placeholder='Enter your email address' 
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className='input_wrapper large_input'>
                        <img src='/src/assets/signup/At.svg' />
                        <input 
                            type='email' 
                            placeholder='Confirm your email address' 
                            name='confirmEmail'
                            value={formData.confirmEmail}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className='input_wrapper large_input'>
                        <img src='/src/assets/signup/Password.svg' />
                        <input 
                            type='password' 
                            placeholder='Enter a password' 
                            name='password'
                            value={formData.password}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className='input_wrapper large_input'>
                        <img src='/src/assets/signup/Password.svg' />
                        <input 
                            type='password' 
                            placeholder='Confirm your password' 
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            />
                    </div>
                </div>
                <div className='middle_section'></div>
                <div className='right_section'>
                    <div className='section_title'>
                        Personal details
                    </div>
                    <div className='input_group'>
                        <div className='input_wrapper mid_input'>
                            <input 
                                type='text' 
                                placeholder='Nickname' 
                                name='nickname'
                                value={formData.nickname}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div className='input_wrapper mid2_input'>
                            <input 
                                type='date' 
                                placeholder='Birthday' 
                                name='birthday'
                                value={formData.birthday}
                                onChange={handleInputChange}
                                />
                        </div>
                    </div>
                    <div className='input_group'>
                        <div className='input_wrapper small_input'>
                            <input 
                                type='text' 
                                placeholder='Weight' 
                                name='weight'
                                value={formData.weight}
                                onChange={handleInputChange}
                                />
                            <div className='select_group'>
                                <div className='select_option left_option active'>
                                    kg
                                </div>
                                <div className='select_option right_option'>
                                    lbs
                                </div>
                            </div>                 
                        </div>
                        <div className='input_wrapper small_input'>
                            <input 
                                type='text' 
                                placeholder='Height' 
                                name='height'
                                value={formData.height}
                                onChange={handleInputChange}
                                />
                            <div className='select_group'>
                                <div className='select_option left_option active'>
                                    cm
                                </div>
                                <div className='select_option right_option'>
                                    in
                                </div>
                            </div>                       
                        </div>
                        <div className='input_wrapper small_input'>
                            <select
                                name='gender'
                                value={formData.gender}
                                onChange={handleSelectChange}
                            >
                                <option value='' hidden>Sex</option>
                                <option value='M'>Male</option>
                                <option value='F'>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='info_text_wrapper'>
                        MedFinder will never sell your personal data, the personal 
                        details given are used only for statistical computation
                    </div>
                    <div className='button_wrapper'>
                        <button type='button' onClick={handleSignUp} disabled={isLoading}>
                            {isLoading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                    {/* Display a loader while loading */}
                    {/*isLoading && <div className="loader">Loading...</div>*/}
                </div>
            </div>
          </div>
          {}
        </div>
      );
    }
};

export default SignUpPage;
