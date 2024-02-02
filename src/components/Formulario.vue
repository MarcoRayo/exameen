<template>
    <div class="container">
        <div class="row">
            <b-container>
                <b-breadcrumb :items="items"></b-breadcrumb>
            </b-container>
            <h1>Formulario Vehiculo</h1>
        </div>
        <div class="row">
            <div class="col-md-4 mx-auto rounded" style="background-color:cornsilk">
                <b-form @submit.prevent="enviar()">
                    <!--Marca-->
                    <b-form-group label-for="input-marca" :state="marcaState" style="padding-top: 1rem;">
                        <div class="col-md-6 mx-auto">
                            <b-form-input id="input-marca" v-model="marca" type="text" :state="marcaState"
                                placeholder="Marca"></b-form-input>
                            <b-form-invalid-feedback :state="marcaState">
                                La marca no debe contener signos.
                            </b-form-invalid-feedback>
                        </div>
                    </b-form-group>

                    <!--Modelo-->
                    <b-form-group label-for="input-modelo" :state="modeloState" style="padding-top: 1rem;">
                        <div class="col-md-6 mx-auto">
                            <b-form-input id="input-modelo" v-model="modelo" type="text" :state="modeloState"
                                placeholder="Modelo"></b-form-input>
                            <b-form-invalid-feedback :state="modeloState">
                                El modelo no debe contener signos.
                            </b-form-invalid-feedback>
                        </div>
                    </b-form-group>

                    <!--Año-->
                    <b-form-group label-for="input-anio" :state="anioState" style="padding-top: 1rem;">
                        <div class="col-md-6 mx-auto">
                            <b-form-input id="input-anio" v-model="anio" type="date" :state="anioState"
                                placeholder="Año de fabricación"></b-form-input>
                            <b-form-invalid-feedback :state="anioState">
                                El número de serie se debe ver de la siguiente manera donde las X son letras y los 0
                                números: XXXX000-00XX
                            </b-form-invalid-feedback>
                        </div>
                    </b-form-group>

                    <!--Num serie-->
                    <b-form-group label-for="input-numero" :state="numState" style="padding-top: 1rem;">
                        <div class="col-md-6 mx-auto">
                            <b-form-input id="input-numero" v-model="numero" type="text" :state="numState"
                                placeholder="Número de serie"></b-form-input>
                            <b-form-invalid-feedback :state="numState">
                                El número de serie se debe ver de la siguiente manera donde las X son letras y los 0
                                números: XXXX000-00XX
                            </b-form-invalid-feedback>
                        </div>
                    </b-form-group>

                    <!--Boton-->
                    <b-form-group class="col-md-2 mx-auto" style="padding-top: 0.5rem;">
                        <b-button type="submit" class="btn btn-success">Enviar</b-button>
                    </b-form-group>

                </b-form>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            marca: "",
            marcaState: null,
            modelo: "",
            modeloState: null,
            numero: "",
            numState: null,
            items: [
                {
                    text: 'Inicio',
                    to: { name: 'Inicio' }
                },
                {
                    text: 'Formulario',
                    active: true
                },
            ],
            methods: {
                validateMarca() {
                    console.log("dwad")
                    if (marca.lengt > 0) {
                        marcaState = true;
                    } else {
                        marcaState = false;
                    }
                },
                enviar() {
                    if (this.marcaState == null) {
                        alert("Debes de rellenar todos los campos")
                    } else {
                        alert("Se mando")
                    }
                },

            },
        }
    }
}
</script>

<style></style>