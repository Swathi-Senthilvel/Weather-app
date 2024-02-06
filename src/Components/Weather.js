





// // import { Oval } from 'react-loader-spinner'; 
// // import React, { useState } from 'react'; 
// // import axios from 'axios'; 
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// // import { faFrown } from '@fortawesome/free-solid-svg-icons'; 
// // import { Paper } from '@mui/material'; 

// // function WeatherApp() { 
// //     const [input, setInput] = useState(''); 
// //     const [weather, setWeather] = useState({ 
// //         loading: false, 
// //         data: {}, 
// //         error: false, 
// //     }); 

// //     const toDateFunction = () => { 
// //         const months = [ 
// //             'January', 
// //             'February', 
// //             'March', 
// //             'April', 
// //             'May', 
// //             'June', 
// //             'July', 
// //             'August', 
// //             'September', 
// //             'October', 
// //             'November', 
// //             'December', 
// //         ]; 
// //         const WeekDays = [ 
// //             'Sunday', 
// //             'Monday', 
// //             'Tuesday', 
// //             'Wednesday', 
// //             'Thursday', 
// //             'Friday', 
// //             'Saturday', 
// //         ]; 
// //         const currentDate = new Date(); 
// //         const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`; 
// //         return date; 
// //     }; 

// //     const search = async () => { 
// //         setWeather({ ...weather, loading: true }); 
// //         const url = 'https://api.openweathermap.org/data/2.5/weather'; 
// //         const api_key = 'f00c38e0279b7bc85480c3fe775d518c'; 
// //         await axios 
// //             .get(url, { 
// //                 params: { 
// //                     q: input, 
// //                     units: 'metric', 
// //                     appid: api_key, 
// //                 }, 
// //             }) 
// //             .then((res) => { 
// //                 console.log('res', res); 
// //                 setWeather({ data: res.data, loading: false, error: false }); 
// //             }) 
// //             .catch((error) => { 
// //                 setWeather({ ...weather, data: {}, error: true }); 
// //                 setInput(''); 
// //                 console.log('error', error); 
// //             }); 
// //     }; 

// //     const handleKeyPress = (event) => {
// //         if (event.key === 'Enter') {
// //             search();
// //         }
// //     };

// //     const paperStyles = {
// //         width: '400px',
// //         borderRadius: '20px',
// //         opacity: '0.9',
// //         padding: '20px',
// //     };

// //     const appContainerStyles = {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         height: '100vh', // Set height to full viewport height
// //         margin: '0', // Remove default margin
// //         backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1676151590182-8a2d868a12c1?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
// //         backgroundSize: 'cover',
// //         backgroundRepeat: 'no-repeat',
// //         backgroundPosition: 'center',
// //     };

// //     const appNameStyles = {
// //         fontSize: '2rem',
// //         marginBottom: '1rem',
// //     };

// //     const searchBarStyles = {
// //         position: 'relative',
// //     };

// //     const citySearchStyles = {
// //         padding: '0.5rem',
// //         borderRadius: '4px',
// //         border: 'none',
// //         fontSize: '1.5rem',
// //         width: '90%',
// //     };

// //     const enterButtonStyles = {
// //         position: 'absolute',
// //         top: '50%',
// //         right: '10px',
// //         transform: 'translateY(-50%)',
// //         fontSize: '1.5rem',
// //         cursor: 'pointer',
// //         display: 'none',
// //         transition: 'opacity 0.3s ease', // Add transition for smooth effect
// //     };

// //     const enterButtonHoverStyles = {
// //         display: 'block',
// //         opacity: '0.7', // Adjust opacity on hover
// //     };

// //     const errorMessageStyles = {
// //         marginTop: '1rem',
// //         fontSize: '1.2rem',
// //     };

// //     const cityNameStyles = {
// //         fontSize: '1.5rem',
// //         marginTop: '1rem',
// //     };

// //     const dateInfoStyles = {
// //         fontSize: '1rem',
// //         marginTop: '0.5rem',
// //     };

// //     const iconTempStyles = {
// //         display: 'flex',
// //         alignItems: 'center',
// //         fontSize: '2rem',
// //         marginTop: '1rem',
// //     };

// //     const iconImageStyles = {
// //         marginRight: '1rem',
// //         height: '60px',
// //     };

// //     const degreeStyles = {
// //         fontSize: '1.5rem',
// //         verticalAlign: 'top',
// //     };

// //     const descriptionWindStyles = {
// //         fontSize: '1.2rem',
// //         marginTop: '0.5rem',
// //     };

// //     return ( 
// //         <div style={appContainerStyles}>
// //             <Paper variant='outlined' style={paperStyles}>
// //                 <div className="App"> 
// //                     <h1 className="app-name" style={appNameStyles}>Weather App</h1> 
// //                     <br></br> 
// //                     <div className="search-bar" style={searchBarStyles}> 
// //                         <input 
// //                             type="text"
// //                             className="city-search"
// //                             placeholder="Enter City Name.."
// //                             name="query"
// //                             value={input} 
// //                             onChange={(event) => setInput(event.target.value)} 
// //                             onKeyPress={handleKeyPress} 
// //                             style={citySearchStyles}
// //                         />
// //                         <div className="enter-button" onClick={search} style={weather.loading ? enterButtonStyles : { ...enterButtonStyles, ...enterButtonHoverStyles }}>⏎</div>
// //                     </div> 
// //                     {weather.loading && ( 
// //                         <> 
// //                             <br /> 
// //                             <br /> 
// //                             <Oval type="Oval" color="black" height={100} width={100} /> 
// //                         </> 
// //                     )} 
// //                     {weather.error && ( 
// //                         <> 
// //                             <br /> 
// //                             <br /> 
// //                             <span className="error-message" style={errorMessageStyles}> 
// //                                 <FontAwesomeIcon icon={faFrown} /> 
// //                                 <span style={{ fontSize: '20px' }}>City not found</span> 
// //                             </span> 
// //                         </> 
// //                     )} 
// //                     {weather && weather.data && weather.data.main && ( 
// //                         <div> 
// //                             <div className="city-name" style={cityNameStyles}> 
// //                                 {weather.data.name}, <span>{weather.data.sys.country}</span> 
// //                             </div> 
// //                             <div className="date" style={dateInfoStyles}> 
// //                                 {toDateFunction()}
// //                             </div> 
// //                             <div className="icon-temp" style={iconTempStyles}> 
// //                                 <img 
// //                                     className=""
// //                                     src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
// //                                     alt={weather.data.weather[0].description} 
// //                                     style={iconImageStyles}
// //                                 /> 
// //                                 {Math.round(weather.data.main.temp)} 
// //                                 <sup className="deg" style={degreeStyles}>°C</sup> 
// //                             </div> 
// //                             <div className="des-wind" style={descriptionWindStyles}> 
// //                                 {weather.data.weather[0].description.toUpperCase()} <br />
// //                                 Wind Speed: {weather.data.wind.speed}m/s 
// //                             </div> 
// //                         </div> 
// //                     )} 
// //                 </div> 
// //             </Paper>
// //         </div>
// //     ); 
// // } 

// // export default WeatherApp;

// //App.js 

// import { Oval } from 'react-loader-spinner'; 
// import React, { useState } from 'react'; 
// import axios from 'axios'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faFrown } from '@fortawesome/free-solid-svg-icons'; 


// function WeatherApp() { 
// 	const [input, setInput] = useState(''); 
// 	const [weather, setWeather] = useState({ 
// 		loading: false, 
// 		data: {}, 
// 		error: false, 
// 	}); 

// 	const toDateFunction = () => { 
// 		const months = [ 
// 			'January', 
// 			'February', 
// 			'March', 
// 			'April', 
// 			'May', 
// 			'June', 
// 			'July', 
// 			'August', 
// 			'September', 
// 			'October', 
// 			'November', 
// 			'December', 
// 		]; 
// 		const WeekDays = [ 
// 			'Sunday', 
// 			'Monday', 
// 			'Tuesday', 
// 			'Wednesday', 
// 			'Thursday', 
// 			'Friday', 
// 			'Saturday', 
// 		]; 
// 		const currentDate = new Date(); 
// 		const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()] 
// 			}`; 
// 		return date; 
// 	}; 

// 	const search = async (event) => { 
// 		if (event.key === 'Enter') { 
// 			event.preventDefault(); 
// 			setInput(''); 
// 			setWeather({ ...weather, loading: true }); 
// 			const url = 'https://api.openweathermap.org/data/2.5/weather'; 
// 			const api_key = 'f00c38e0279b7bc85480c3fe775d518c'; 
// 			await axios 
// 				.get(url, { 
// 					params: { 
// 						q: input, 
// 						units: 'metric', 
// 						appid: api_key, 
// 					}, 
// 				}) 
// 				.then((res) => { 
// 					console.log('res', res); 
// 					setWeather({ data: res.data, loading: false, error: false }); 
// 				}) 
// 				.catch((error) => { 
// 					setWeather({ ...weather, data: {}, error: true }); 
// 					setInput(''); 
// 					console.log('error', error); 
// 				}); 
// 		} 
// 	}; 

// 	return ( 
// 		<div className="App"> 
// 			<h1 className="app-name"> 
// 				GeeksforGeeks Weather App 
// 			</h1> 
// 			<div className="search-bar"> 
// 				<input 
// 					type="text"
// 					className="city-search"
// 					placeholder="Enter City Name.."
// 					name="query"
// 					value={input} 
// 					onChange={(event) => setInput(event.target.value)} 
// 					onKeyPress={search} 
// 				/> 
// 			</div> 
// 			{weather.loading && ( 
// 				<> 
// 					<br /> 
// 					<br /> 
// 					<Oval type="Oval" color="black" height={100} width={100} /> 
// 				</> 
// 			)} 
// 			{weather.error && ( 
// 				<> 
// 					<br /> 
// 					<br /> 
// 					<span className="error-message"> 
// 						<FontAwesomeIcon icon={faFrown} /> 
// 						<span style={{ fontSize: '20px' }}>City not found</span> 
// 					</span> 
// 				</> 
// 			)} 
// 			{weather && weather.data && weather.data.main && ( 
// 				<div> 
// 					<div className="city-name"> 
// 						<h2> 
// 							{weather.data.name}, <span>{weather.data.sys.country}</span> 
// 						</h2> 
// 					</div> 
// 					<div className="date"> 
// 						<span>{toDateFunction()}</span> 
// 					</div> 
// 					<div className="icon-temp"> 
// 						<img 
// 							className=""
// 							src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} 
// 							alt={weather.data.weather[0].description} 
// 						/> 
// 						{Math.round(weather.data.main.temp)} 
// 						<sup className="deg">°C</sup> 
// 					</div> 
// 					<div className="des-wind"> 
// 						<p>{weather.data.weather[0].description.toUpperCase()}</p> 
// 						<p>Wind Speed: {weather.data.wind.speed}m/s</p> 
// 					</div> 
// 				</div> 
// 			)} 
// 		</div> 
// 	); 
// } 

// export default WeatherApp;
import { Oval } from 'react-loader-spinner';
import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import { Paper } from '@mui/material'; 
function WeatherApp() {
    const [input, setInput] = useState('');
    const [weather, setWeather] = useState({
        loading: false,
        data: {},
        error: false,
    });

    const toDateFunction = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        const WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        return date;
    };

    const search = async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setInput('');
            setWeather({ ...weather, loading: true });
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
            await axios
                .get(url, {
                    params: {
                        q: input,
                        units: 'metric',
                        appid: api_key,
                    },
                })
                .then((res) => {
                    console.log('res', res);
                    setWeather({ data: res.data, loading: false, error: false });
                })
                .catch((error) => {
                    setWeather({ ...weather, data: {}, error: true });
                    setInput('');
                    console.log('error', error);
                });
        }
    };

    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', margin: '0', backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1676151590182-8a2d868a12c1?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            <Paper variant="outlined" style={{ width: '400px', borderRadius: '20px', opacity: '0.9', padding: '20px' }}>
                <h1 className="app-name" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Weather App</h1>
                <br></br>
                <div className="search-bar" style={{ position: 'relative' }}>
                    <input
                        type="text"
                        className="city-search"
                        placeholder="Enter City Name.."
                        name="query"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        onKeyPress={search}
                        style={{ padding: '0.5rem', borderRadius: '4px', border: 'none', fontSize: '1.5rem', width: '90%' }}
                    />
                    <div className="enter-button" onClick={search} style={weather.loading ? { position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', fontSize: '1.5rem', cursor: 'pointer', display: 'none', transition: 'opacity 0.3s ease' } : { position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', fontSize: '1.5rem', cursor: 'pointer', display: 'block', opacity: '0.7' }}>⏎</div>
                </div>
                {weather.loading && (
                    <>
                        <br />
                        <br />
                        <Oval type="Oval" color="black" height={100} width={100} />
                    </>
                )}
                {weather.error && (
                    <>
                        <br />
                        <br />
                        <span className="error-message" style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
                            <FontAwesomeIcon icon={faFrown} />
                            <span style={{ fontSize: '20px' }}>City not found</span>
                        </span>
                    </>
                )}
                {weather && weather.data && weather.data.main && (
                    <div>
                        <div className="city-name" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
                            {weather.data.name}, <span>{weather.data.sys.country}</span>
                        </div>
                        <div className="date" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                            {toDateFunction()}
                        </div>
                        <div className="icon-temp" style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', marginTop: '1rem' }}>
                            <img
                                className=""
                                src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
                                alt={weather.data.weather[0].description}
                                style={{ marginRight: '1rem', height: '60px' }}
                            />
                            {Math.round(weather.data.main.temp)}
                            <sup className="deg" style={{ fontSize: '1.5rem', verticalAlign: 'top' }}>°C</sup>
                        </div>
                        <div className="des-wind" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
                            {weather.data.weather[0].description.toUpperCase()} <br />
                            Wind Speed: {weather.data.wind.speed}m/s
                        </div>
                    </div>
                )}
            </Paper>
        </div>
    );
}

export default WeatherApp;
