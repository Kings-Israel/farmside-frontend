<template>
    <div class="footer">
            <div class="d-flex flex-column align-content-center flex-wrap">
                <img src="../assets/images/Farmside.png" class="footer-img" alt="">
                <p id="footer-content">
                    <vs-icon icon="copyright" class="mr-1"></vs-icon>
                    Farmside Media - {{d.getFullYear()}}
                </p>
            </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            d: new Date(),
            email: '',
            success: false
        }
    },
    // methods: {
    //     subscribe() {
    //         this.$store.dispatch('emailSubscription', {email: this.email}).then(() => {
    //             this.email = ''
    //             this.success = true
    //             setTimeout(() => {
    //                 this.success = false
    //             }, 5000)
    //         })
    //     }
    // }
}
</script>

<style scoped>
.footer {
    background: #000;
}

#footer-content {
    color: #fff;
    display: flex;
    justify-content: center;
}

#message {
    display: inline;
    padding-left: 10px;
    color: rgb(26, 157, 41);
}

@media (max-width: 980px) {
    .footer-img {
        margin: 0;
        padding: 0;
        width: 350px;
    }
}
@media (max-width: 580px) {
    .footer-img {
        margin-top: 20px;
    }
}

@media (max-width: 480px) {
    #submit {
        margin-left: 0;
        width: 100%;
    }
}
</style>