import ApolloClient from 'apollo-boost'

const createApoloClient = () =>{
    return new ApolloClient({
        uri: 'http://192.168.0.12:5000/graphql',
        cache: new InMemoryCache()
    })
}

export default createApoloClient;