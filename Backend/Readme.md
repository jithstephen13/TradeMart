# nem111-project-backend
Creating a backend project for Anthropologie website, where the API is provided to get all the products data of website. By using that you can able to perform sorting, filtering functionality.


# for sorting purpose
1. sort by price (lowprice, highprice)
2. sort by rating (low, high)



# for filtering purpose
#### company

 


#### for filtering use this url
`http://localhost:8080/medicin?company=${company}`

### filtering with pagination
`http://localhost:8080/medicin?page=1&limit=5&&company=${company}`

#### for pagination url
`http://localhost:8080/medicin?page=2&limit=10`

#### for sorting url 
`http://localhost:8080/medicin?sort=rating,asc`
`http://localhost:8080/medicin?sort=rating,desc`

<!-- `http://localhost:8080/medicin?page=1&limit=5&&company=Durian&sort=rating,desc` -->

#### for searching url
`http://localhost:8080/medicin?search=sea`




 



#### for verifying purpose you can check following url

#### it is the demo link to check

### https://frail-gold-hen.cyclic.app/
 







## for authentication purpose 

1. REGISTRATION URL 
the fields are 

first_name (required)
last_name (required)
email (required)
password (required)
 

url = `http://localhost:8080/users/register`

if (registration success) {
    return message;
} else {
    return registration failed;
}



2. LOGIN URL
the fields are

email (required)
password (required)

url = `http://localhost:8080/users/login`


if (login success) {
    return ( message, token, name, role );
} else {
    return login failed;
}