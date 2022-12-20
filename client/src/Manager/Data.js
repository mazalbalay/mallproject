const [data, setData] = useState([]);


const getData = async() => {
    const response = await axios.get(API_URL);
    console.log(response.data);
    setData(response.data);
}

export default data;