<template>
<div class="brand">
    <div class="brand-bar">
        <p class="brand-text">
            We <span id="capture-text">Capture</span> your Special Moments
        </p>
        <div id="learn-more-link">
            <a href="#about" v-animate-css.hover="'bounce'">
                <font-awesome-icon :icon="['fas', 'chevron-circle-down']" size="2x" />
            </a>
        </div>
    </div>
    <div class="container brand-images">
        <div class="row">
            <div class="col-4">
                <div id="first-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1614533708409-fdad0805a4fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="second-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1553367998-6ea7e682d40c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="third-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1557130680-0f816eef4743?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div id="fourth-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1611233361051-6020330b649f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="fifth-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1591563603796-b1a90c91703e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="sixth-image">
                    <div class="card">
                        <div class="card-content">
                            <img src="https://images.unsplash.com/photo-1568648801431-a7be13ee3a03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" class="m-1" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    name: "Brand",
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

span {
  position: relative;
  color: inherit;
  text-decoration: none;
}

span:before, span:after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
}
#capture-text {
  padding: 0 10px;
  transition: .3s ease-in-out;
}

#capture-text:hover {
    color: #000;
    background-color: #fff;
}
#capture-text:before, #capture-text:after {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: #259946;
}
#capture-text:before {
  border-width: 2px 0 2px 0;
  transform: scaleX(0);
}
#capture-text:after {
  border-width: 5px 5px 5px 5px;
  transform: scaleY(0);
}
#capture-text:hover:before, #capture-text:hover:after {
  transform: scale(1, 1);
}

.brand {
    margin-bottom: 50px;
}
.brand-bar {
    width: 100%;
    background: rgba(39, 39, 39, 0.5);
    margin-top: 170px;
    height: 290px;
    z-index: 1;
    position: absolute;
}
.brand-text {
    display: flex;
    justify-content: center;
    font-size: 60px;
    font-weight: bold;
    margin-top: 30px;
    color: #fff;
    font-family: 'Coda Caption', sans-serif;
}

.brand-bar a {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    text-decoration: none;
    color: #fff;
    font-size: 24px;
    transition: .3s ease-in-out;
}
.brand-bar a:hover {
    color: #259946;
    font-weight: bold;
}
.container {
    margin-top: -40px;
}
#first-image {
    margin-top: 70px;
    transform: rotate(20deg);
}
#second-image {
    margin-top: 70px;
    margin-left: 20px;
    transform: rotate(-10deg);
}
#third-image {
    margin-top: 70px;
    transform: rotate(5deg);
}
#fourth-image {
    margin-top: -40px;
    transform: rotate(-15deg);
}
#fifth-image {
    margin-top: -100px;
    height: 300px;
}
#sixth-image {
    margin-top: -250px;
    height: 300px;
    transform: rotate(-5deg);
}
img {
    width: 270px;
    padding: 1px;
    padding-left: 2px;
    border-radius: 4px;
}

.card {
    background: rgb(232, 255, 227);
    width: 280px;
    border: 1px solid black;
    margin: 55px;
}

@media (max-width: 1080px) {
    .brand-images {
        display: none;
    }
    .brand-bar {
        position: relative;
        margin-top: 0;
        height: 100%;
    }
    .brand-text {
        display: inline-block;
        text-align: center;
    }
    span {
        position: relative;
    }
}

@media (max-width: 980px) {
    .brand-images {
        display: none;
    }

    .brand-bar {
        position: relative;
        margin-top: 0;
        height: 100%;
    }
    
    .brand-text {
        display: inline-block;
        text-align: center;
    }
    span {
        position: relative;
    }

}

@media (max-width: 580px) {
    #capture-text {
        padding: 0;
    }
    #capture-text:hover {
        background-color: #259946;
    }
    #capture-text:hover:before, #capture-text:hover:after {
        transform: scale(0, 0);
    }
}

</style>