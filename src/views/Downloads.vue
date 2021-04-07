<template>
    <div id="downloads">
        <div id="section-header">
            <h1 id="downloads">Downloads</h1>
        </div>
        <div class="container">
            <b-table striped hover dark :items="files">
                <template #cell(name)="data">
                    {{ data.item.download }}
                </template>
                <template #cell(download)="data">
                    <a :href="`${publicPath+''+data.item.download}`" download="download" class="download-button">
                        <vs-icon size='medium' class="download-icon" icon="download"></vs-icon>
                    </a>
                </template>
                <template #cell(read)="data">
                    <vs-icon size="medium" class="view-button" icon="text_snippet" @click="viewFile(publicPath+''+data.item.download)"></vs-icon>
                </template>
            </b-table>
        </div>
        <div class="container" v-if="url !== ''">
            <vue-pdf-viewer height="1000px" :url="url">
            </vue-pdf-viewer>
            <button class="btn btn-danger pb-2" style="float: right" @click="cancel">Close</button>
        </div>
    </div>
</template>

<script>
import VuePDFViewer from 'vue-instant-pdf-viewer'
export default {
    name: 'Downloads',
    components: {
        'vue-pdf-viewer': VuePDFViewer,
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            url: '',
            files: [
                {
                    name: 'Equipement Hiring Agreement',
                    download: "Profile.pdf",
                    Read: ''
                },
                {
                    name: 'Non-Discolsure Agreement',
                    download: "Kings\ Milimo\ CV.pdf",
                    Read: ''
                }
            ]
        }
    },
    methods: {
        viewFile(file) {
            this.url = file
        },
        cancel() {
            this.url = ''
        }
    },
    mounted() {
    }

}
</script>

<style scoped>
.download-button {
    color: #fff;
}
.download-icon {
    padding-left: 15px;
}
.view-button:hover {
    cursor: pointer;
}
</style>