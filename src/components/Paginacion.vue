<template>
    <div class="container">
        <div class="row">
            <b-container>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
            <h1>Formulario</h1>
        </div>
        <div class="overflow-auto">

            <p class="mt-3">Current Page: {{ currentPage }}</p>

            <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small></b-table>

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                aria-controls="my-table"></b-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Inicio',
                    to: { name: 'Inicio' }
                },
                {
                    text: 'Paginación',
                    active: true
                },
            ],
        }
    },
    mounted() {
        vehiculos: fetch("http://localhost:5173/api/vehiculos")
            .then((response) => response.json()).then(data => console.log(data))
    }
}
</script>

<style></style>