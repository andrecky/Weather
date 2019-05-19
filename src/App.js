import React, {useEffect, useState} from 'react'
import './App.css'
import {connect} from "react-redux";
import {
    BlockName,
    CityName,
    DescriptionWeather,
    H3,
    Input,
    RenderWeather,
    Span, Temp, WeatherData,
    Wrapper
} from "./Styled-component/styles";
import {abcThunk, errorCityAction, getDataThunk, onChangeValueAction, pushInputAction} from "./Redux/AppReducer";
import {FaSearch} from "react-icons/fa";


const App = (props) => {

    useEffect(() => {
        props.getData()
    }, []);
    let [boll, setBool] = useState(false);

    let data = props.items.data;
    return (
        <Wrapper>
            <H3>weather</H3>
            <div  className={'pod'}>
                <div className={!boll ? 'normal' : 'activeBlock'}>
                    {/* */}
                    < Input
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') props.submitValue(setBool(!boll));
                            // setBool(!boll)
                        }}
                        onClick={() => setBool(!boll)}
                        value={props.onChange}
                        onChange={props.onChangeValue}
                        placeholder={props.error}


                    />
                    <FaSearch className={'icoSearch'}
                              onClick={() => props.submitValue()}

                    />


                </div>
                <div className={!boll ? 'active' : 'block'}>
                    {props.data.map((el) =>
                        <Span onClick={() =>
                            props.pushInput(el, setBool(!boll))}
                        >
                            {el}
                        </Span>)
                    }
                </div>
            </div>
            {props.items ?
                <RenderWeather>
                    <BlockName>
                        <CityName> {data.name}</CityName>
                        <DescriptionWeather> {data.weather[0].description}</DescriptionWeather>
                    </BlockName>
                    <Temp>
                        <img className={'imgWeather'}
                             src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                        {Math.trunc(data.main.temp)}
                        {String.fromCharCode(176)}
                        <WeatherData>
                            <span>
                                humidity:
                                {data.main.humidity}%
                            </span>
                            <span>
                                wind:
                                {data.wind.speed} km/h
                        </span>
                        </WeatherData>
                    </Temp>
                </RenderWeather> : ''}
        </Wrapper>
    )
};

const mapStateToProps = (state) => {
    return {
        data: state.Reducer.data,
        onChange: state.Reducer.onChange,
        items: state.Reducer.items,
        error: state.Reducer.error,

    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        onChangeValue(el) {
            dispatch(onChangeValueAction(el.target.value,))
        },

        submitValue() {
            dispatch(abcThunk())
        },
        getData(e) {
            dispatch(getDataThunk(e))
        },
        pushInput(e) {
            dispatch(pushInputAction(e))
        },
        errorCity(e) {
            errorCityAction(e)
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App)
