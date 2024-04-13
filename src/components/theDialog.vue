<template>
    <div>
        <v-btn prepend-icon="$plus" color="secondary" @click="dialog = true">
          Импорт
        </v-btn>

        <v-dialog
            v-model="dialog"
            width="520"
        >
        <v-card class="px-4 py-4">
            <v-card-title class="d-flex justify-space-between align-center">
                <div class="text-h4 text-black">
                    Импорт файла
                </div>

                <v-btn
                    icon="mdi-close"
                    variant="text"
                    @click="isActive.value = false"
                ></v-btn>
            </v-card-title>

            <v-card-text>

                <v-row no-gutters style="height: 40px;" class="mb-12 mt-2">
                    <v-col cols="12">
                        <v-file-input
                            density="compact"
                            prepend-icon=""
                            variant="solo-filled"
                            label="Выберите фаил"
                            accept=".csv, .xls, .xlsx"
                            show-size
                            ref="file"
                        >
                        <template v-slot:append>
                            <v-btn
                                class="ms-auto"
                                text="Обзор"
                                variant="outlined"
                                @click="openFile()"
                            ></v-btn>
                        </template>
                        </v-file-input>
                    </v-col>
                </v-row>
                <v-row no-gutters style="height: 40px;">
                    <v-checkbox label="Проверить ИНН" color="secondary" density="compact"></v-checkbox>
                </v-row>
                <v-row no-gutters style="height: 40px;">
                    <v-checkbox label="Проверить адрес" color="secondary" density="compact"></v-checkbox>
                </v-row>             
            </v-card-text>

            <template v-slot:actions>
                <v-spacer/>
                <v-btn
                    class="ms-auto"
                    text="Отмена"
                    variant="outlined"
                    @click="dialog = false"
                ></v-btn>
                <v-btn
                    class="ml-4"
                    text="Импортировать"
                    variant="flat"
                    color="secondary"
                    @click="dialog = false"
                ></v-btn>
            </template>
        </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    data () {
        return {
            dialog: false,
        }
    },
    methods:{
        openFile(){
            this.$refs.file.click()
        }
    }
}
</script>