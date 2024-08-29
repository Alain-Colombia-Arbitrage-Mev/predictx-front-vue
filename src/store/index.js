import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        loggedIn: false,
        userLogged: null,
        userLogout: null,
        // contractLogged: null,
        startloading: false,
    },
    methods : {
            
    },
    actions: {
        login (context, payload) {
            // const contractAddress = payload.contract;
            // await _web3.setContract(contractAddress, ABI)
            
            // let everest = await _web3.getContract() 
            // let login = await everest.methods.login(payload.address).call();
            
            if (payload) {
                localStorage.setItem('login', JSON.stringify(payload));
                context.commit('login', payload)
            }
        },

        // userLogged ()

        logout (context) {
            context.commit('logout') 
        },

        userLogged (context) {
            return context.state.userLogged 
        }
    },

    mutations: {
        login (state, payload) {
            state.loggedIn = true
            // state.contractLogged = payload.contract
            state.userLogged = JSON.parse(localStorage.getItem('login'));
        },

        logout (state) {
            state.contractLogged = null// payload.contract
            state.userLogout = state.userLogged
            state.loggedIn = false

            localStorage.removeItem('login')
        }
    }
})


export default store;  
// Vue.use(store);