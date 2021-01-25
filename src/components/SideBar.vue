<template>
    <v-card
    v-model="drawer"
    id="inspire" 
    class="grey lighten-4">
        <v-navigation-drawer
        v-model="drawer"
        app
        mini-variant
        >
            <v-col
            align="center"
            justify="space-around"            
            >
                <v-btn icon>
                    <v-app-bar-nav-icon v-on:click="tDrawer"></v-app-bar-nav-icon>
                </v-btn>
            <div class="mt-25">
                <router-link to="/Dashboard">
                <v-btn icon >
                    <span class="material-icons size-30">
                    trending_up
                    </span>
                </v-btn>
                </router-link>

                <router-link to="/Mytasks">
                <v-btn icon>
                    <span class="material-icons size-30">
                    fact_check
                    </span>
                </v-btn>
                </router-link>

                <v-btn icon>
                    <span class="material-icons size-35">
                    settings_applications
                    </span>
                </v-btn>
            </div>

            <div class="side-nav-bottom">
                <v-btn icon >
                    <span class="material-icons size-30">
                    help
                    </span>
                </v-btn>
                <v-btn icon>
                    <span class="material-icons size-30">
                    chat
                    </span>
                </v-btn>
                <v-btn icon>
                    <span class="material-icons size-30">
                    ondemand_video
                    </span>
                </v-btn>
            </div>
            </v-col>
        </v-navigation-drawer>
    <v-main>
    </v-main>
  </v-card>  
</template>

<script>
export default {   
    data:()=>({
        drawer:true

    })
    ,
    
    methods:{tDrawer(){
        console.log(this.drawer)
        this.drawer=!this.drawer
    }}
}
</script>

<style>
.mt-25{
    margin-top: 25px;
}

.size-30{
    font-size: 25px;
}

.size-35{
    font-size: 29px;
    margin-top: 10px;
}

.side-nav-bottom{
    position: fixed;
    bottom: 20px;
    left: 6px;
}

</style>