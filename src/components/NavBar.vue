<template>
<div>
    <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense>
        <v-app-bar-nav-icon v-on:click="toggleDrawer"></v-app-bar-nav-icon>

        <div>
            <div class="logo-container">
                <div class="logo-icon">
                    <div class="logo-line-1"></div>
                    <div class="logo-line-2"></div>
                    <div class="logo-line-3"></div>
                </div>
                <div class="logo-text-container">
                    <div class="i">Im</div>
                    <div class="w">Works</div><br>
                    <small class="bottom-text">Delivar Social Impact</small>
                </div>
            </div>
        </div>

        <v-spacer ></v-spacer>

        <div class="region-container">
            <div class="region-icon"></div>
            <div class="region-heading hidden-sm-and-down">
                IN-Southern Region <br>
                <v-icon size="10">mdi-lock</v-icon> <small>Private</small>
            </div>            
        </div>
      

        <v-btn icon >
        <span class="material-icons">
            house
        </span>    
        </v-btn>

        <v-btn icon>
        <span class="material-icons">
            notifications
        </span>      
        </v-btn>

        <div icon class="hidden-sm-and-down">
        <v-btn icon>
        <span class="material-icons">
        help
        </span>
        </v-btn>     
        </div>

        <v-avatar size="36">
        <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
        >
        </v-avatar>
    </v-toolbar>
    <v-main>
    <SideBar/> 
    </v-main>
  </v-card> 
    
  </div>
</template>

<script>
import SideBar from "./SideBar"
  export default {
    data: () => ({
      drawer: true,
      group: null,
    }),
    methods:{
        toggleDrawer(){
            console.log("nav")
            console.log(this.drawer)
        }
    },
    components: { SideBar },    
  }
</script>


<style>
.region-container{
    padding-top: 10px;
    width: 180px;
    height: 58px;
}

.region-icon{    
    width: 35px;
    height: 35px;
    margin-right: 5px;
    background: transparent url('../assets/socialsprout.png') 0% 0% no-repeat padding-box;
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: 0px 1px 2px #00000029;
    border-radius: 5px;
    float: left;
}

.region-heading{    
    width: 179px;
    height: 25px;
    text-align: left;
    font: normal normal normal 15px/18px Poppins;
    letter-spacing: 0px;
    color: #484848;
}

@media screen and (max-width: 800px) {
  .hidden-sm-and-down {
    display: none;
    }
.region-container{
    width: 35px;
}
}

.logo-container{
    width: 150px;
    height: 36px;
}

.logo-icon{
    border-radius: 5px;
    padding-top: 12px;
    padding-left: 10px;
    width: 39px;
    height: 36px;
    background: transparent radial-gradient(closest-side at 50% 50%, #FFFFFF00 0%, #FAFAFA11 26%, #ECECEC24 57%, #D5D5D539 90%, #CCCCCC40 100%) 0% 0% no-repeat padding-box;
    float: left;
}

.logo-line-1{
    width: 4px;
    height: 16px;
    background: transparent linear-gradient(90deg, #1EC2ED 0%, #3374B9 100%) 0% 0% no-repeat padding-box;
    position: relative;
    left: 2px;
}

.logo-line-2{
    width: 4px;
    height: 10px;
    background: transparent linear-gradient(90deg, #52B962 0%, #0A8C45 100%) 0% 0% no-repeat padding-box;
    position: relative;
    left: 8px;
    bottom: 10px;
}

.logo-line-3{
    width: 4px;
    height: 13px;
    background: transparent linear-gradient(90deg, #52B962 0%, #0A8C45 100%) 0% 0% no-repeat padding-box;
    position: relative;
    left: 15px;
    bottom: 23px;
}

.logo-text-container{
    margin-top:6px;    
    margin-left: 45px;
    height: 30px;
}

.i{
    color: #3374B9; 
    font-weight: 600;
    float: left; 
    padding: 0;
    margin: 0;
}

.w{
    color: #52B962;
    font-weight: 600;   
    padding: 0;
    margin: 0;
    float: left;
}


.bottom-text{
    font-size: 10px;    
    font-weight: 600;  
    color: #4C4C4C; 
    position: fixed;
    top: 80;
}

</style>