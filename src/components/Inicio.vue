<template>
    <div class="container">
        <h1>Página Principal</h1>
        <div class="row col-md-6 mx-auto">
            <div class="col-md-4 mx-auto">
                <router-link :to="{ name: 'Formulario'}" class="btn btn-dark">Formulario</router-link>
            </div>  
            <div class="col-md-4 mx-auto">
                <router-link :to="{ name: 'Paginacion'}" class="btn btn-dark">Paginación</router-link>
            </div>                      
        </div>        
    </div>  
  
</template>

<script>
export default {

}
</script>

<style>

</style>