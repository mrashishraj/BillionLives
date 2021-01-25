<template>
    <div  class=" border position-top">         
        <div class="mytask-nav mt-2">
        
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <div class="task-title">My Tasks</div>

        <div class="spacer"></div>

        <div class="search-container">
            <div class="magnify">
                <span class="material-icons">
                    search
                </span>
            </div>
            <div class="inp-box m-d-none">
                <input class="form-control me-2 search-box" type="search" placeholder="Search" aria-label="Search">
            </div>
        </div>
        <div class="filter-btn mr-3">
            <div class="float-left pt-1 px-2">
                <span class="material-icons">
                filter_alt
                </span>
            </div>
            <div class="pt-1 d-hide float-left mr-2 m-d-none">Filter</div>                
        </div>
        <div class="eq-cont p-1 mr-3">
            <div><img class="eq-icon" src="../assets/eq-icon.jpg" alt=""></div>
        </div>

        </div>
        <div class="mt-3 task-container">
            <div class=" text-center">                
                <div class="card_header">
                    <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Overdue</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link"  href="#">Current</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" tabindex="-1">Completed</a>
                    </li>
                    </ul>
                </div>
                <div class="card_body overflow-auto" > 
                    <div class="bg-secondary date-v text-white">12/03/2019</div>                    

                    <div class="border task-card p-2 mb-2">
                        <div class="card-title ml-4 t-left">
                        <h5 class="font-15 float-left">Baseline Survey</h5> 
                        <div class="float-right">
                            <span class="material-icons">
                                more_vert
                            </span>
                        </div>
                        <p class="float-right m-d-none ">28/03/2019</p>
                        <div class="btn border bg-info p-0 px-3 text-primary ml-5 ">Surveys</div>
                        </div>
                        <div class="t-left ml-4 font">
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                            <p class="project-text">Project Name :  </p><p class="m-d-none"> Mahila Kisan Sashaktikaram Pariyojna (MKSP)</p>
                        </div> 
                    </div> 

                    <div class="border task-card p-2 mb-2">
                        <div class="card-title ml-4 t-left">
                        <h5 class="font-15 float-left">Register New Students</h5> 
                        <div class="float-right">
                            <span class="material-icons">
                                more_vert
                            </span>
                        </div>
                        <p class="float-right m-d-none">28/03/2019</p>
                        <div class="btn border bg-success p-0 px-3 text-white ml-5 ">Activities</div>
                        </div>
                        <div class="t-left ml-4 font">
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                            <p class="project-text">Project Name :  </p><p class="m-d-none"> Mahila Kisan Sashaktikaram Pariyojna (MKSP)</p>
                        </div> 
                    </div> 

                    <div class="bg-secondary date-v text-white">30/03/2019</div>

                    <div class="border task-card p-2 mb-2">
                        <div class="card-title ml-4 t-left">
                        <h5 class="font-15 float-left">School Checkin</h5> 
                        <div class="float-right">
                            <span class="material-icons">
                                more_vert
                            </span>
                        </div>
                        <p class="float-right m-d-none">30/03/2019</p>
                        <div class="btn border bg-primary p-0 px-3 text-white ml-5 ">Surveys</div>
                        </div>
                        <div class="t-left ml-4 font">
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                            <p class="project-text">Project Name :  </p><p class="m-d-none"> Mahila Kisan Sashaktikaram Pariyojna (MKSP)</p>
                        </div> 
                    </div> 

                    <div class="border task-card p-2 mb-2">
                        <div class="card-title ml-4 t-left">
                        <h5 class="font-15 float-left">Reimbursement form</h5>
                        <div class="float-right">
                            <span class="material-icons">
                                more_vert
                            </span>
                        </div> 
                        <p class="float-right m-d-none">30/03/2019</p>
                        <div class="btn border bg-info p-0 px-3 text-primary ml-5 ">Surveys</div>
                        </div>
                        <div class="t-left ml-4 font">
                            <p>Lorem ipsum dolor, sit amet consectetur</p>
                            <p class="project-text">Project Name :  </p><p class="m-d-none"> Mahila Kisan Sashaktikaram Pariyojna (MKSP)</p>
                        </div> 
                    </div> 
        
                </div>            
            </div>
        </div>           
    </div>
</template>

<script>

name:"Mytasks"
export default {
    
}
</script>

<style>
    .position-top{
        position: fixed;
        top: 60px;
        left: 5%;
        width: 94%;
        border-radius: 8px;
    }

    .container{
        width: 1800px;
    }

    .task-container{
        border: none;
    }

    .magnify{
        float: left;
        padding-top: 5px;
        padding-left: 5px;
    }

    .inp-box{
        float: left;
    }

    .search-box{
        height: 30px;
        border: none;
    }

    .search-container{
        border: 1px solid gray;
        border-radius: 8px;
        margin-right: 20px;
    }

    .border-none{
        box-shadow: none;
    }

    .mytask-nav{
        width: 100%;
        border: 1px solid balck;
        display: flex;
        flex-direction: row;
        height: 40px;
    }

    .task-title{
        padding-top: 5px;
    }

    .task-card{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 0px 4px #00000029;
        border-radius: 5px;
    }

    .spacer{
        margin-left: 0%;
    }

    .filter-btn{
        border: 1px solid gray;        
        text-align: center;
        color: gray;
        border-radius: 8px;
    }

    .eq-icon{
        height: 25px;
    }

    .eq-cont{
        border: 1px solid gray;
        border-radius: 8px;
    }

    .t-left{
        text-align: left;
    }

    .card_body{
        width: 60%;
        margin-left: 270px;
        margin-top: 15px;
    }

    .card_header{
        border: none;
        background-color: none;
        margin-left: 540px;
    }

    .font-15{
        font-size: 15px;
    }

    .font{
        font-size: 13px;
    }

    .project-text{
        float: left;
    }

    .date-v{
        width: 100px;
        border-radius: 8px;
        margin: 5px;
        display: none;
    }

    @media screen and (max-width: 800px){
        .card_body{
        width: 100%;
        margin-left: 0;
        }   

        .date{
            display: none;
        }

        .date-v{
            display:inline-block;
        }

        .card_header{
            margin-left: 70px;
        }
    
        .magnify{
            padding: 3px;
        }

        .position-top{
            left: 3%;
        }

        .search-container{
            border: none;
        }

       

        .m-d-none{
            display: none;
        }

        .project-text{
        float: none;
        }

        .task-card{
            margin-left: 2%;
            margin-right: 2%
        }
    }
</style>