import React, { useState, useEffect } from 'react';
import ScreenContainer from '../components/Screen';
import MenuHeader from '../components/MenuHeader';
import CustomerSelectionList from '../components/customerSelectionList'
import Button from '../components/Button';
import SearchField from '../components/searchField'
import { useRecoilValue } from 'recoil';
import { filterDisplay, customers } from '../store/customers';
import { useSetfilterDisplay, useSetCustomers, allCustomersDetailsState, filterCustomerState } from "../store/customers";
import { fetchCustomers } from '../actions/customers';
import { Link, useHistory } from 'react-router-dom'


const styles = {

    btn: {

        backgroundColor: '#0B8D98',
        color: 'E4FDFF',
        width: '40vw',
        height: '10vh',
        marginBottom: '20px',
        overflow: 'hidden',
    },
}


const SelectCustomer = () => {
    let history = useHistory();
    const allCustomers = useRecoilValue(allCustomersDetailsState);
    const filteredCustomers = useRecoilValue(filterCustomerState)


    const setItems = useSetCustomers();
    const setFilterItems = useSetfilterDisplay();

    const [searchText, setSearchText] = React.useState('')
    const [error, setError] = React.useState('')


    useEffect(() => {
        // Update the document title using the browser API
        fetchCustomers(setItems);
    }, []);


    const searchFieldHandleChange = (e) => {
        let input = e.target.value
        if (input !== '') {
            setSearchText(input.trim())
            let newList = allCustomers.data.filter(({ name }) => name.toLowerCase().startsWith(input.toLowerCase()))
            console.log(newList)
            setFilterItems(newList);


        } else {
            setSearchText('')
            setFilterItems(allCustomers.data);
        }
    }



    const onClickGoBack = () => {

        console.log('clicked')

            history.goBack();
        
    }



    return (
        <ScreenContainer>
            <MenuHeader icon="backArrow"
                title="Select Customers" />

            <SearchField value={searchText} handleChange={searchFieldHandleChange} />


            <CustomerSelectionList

                customersName={filteredCustomers.data}
                error={error}

            />

            <div style={styles.btnContainer}>

                <Button text="Done" onClickButton={() => onClickGoBack()} style={styles.btn} />
                {/* <button onClick={() => onClickGoBack()} style={styles.btn}> Done </button> */}


                <Link to={`/addCustomer`}>

                    <Button text="Add new" style={styles.btn} />

                </Link>
            </div>

        </ScreenContainer>
    );
}

export default SelectCustomer