import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: { 
            countriesList: [],
            countryToFilter: ""
        },
        computed:{
            totalPopulation: function() {
                const total = this.countriesList.reduce ((total, country) => {
                return total + country.population;
                }, 0)
            return total;
            },

            filterCountry: function() {
                const filter = this.countriesList.filter( (country) => {
                    return country.name === this.countryToFilter;
                })
                return filter;
            }

            // filterBalances: function() {
            //     const filter = this.accounts.filter( (account) => {
            //       return account.balance > this.balanceFilter;
            //     })
            //     return filter;
            //   }

        },
        mounted: function () {
            this.fetchCountries()
        },
        methods: { 
            fetchCountries: function() {
                fetch("https://restcountries.eu/rest/v2/all")
                .then( response => response.json() )
                .then( data => this.countriesList = data);
            }
            
            
    
        },
    })
})



// document.addEventListener('DOMContentLoaded', () => {
//     new Vue({
//       el: '#app',
//       data: {
//         dogImgURL: null
//       },
//       mounted: function (){ // Lifecycle hook
//         this.fetchDog()
//       },
//       methods: {
//         fetchDog: function(){
//           fetch("https://dog.ceo/api/breeds/image/random")
//           .then( response => response.json() )
//           .then( data => this.dogImgURL = data.message )
//         }
//       }
//     })
//   })