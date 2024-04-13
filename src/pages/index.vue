<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="container">
    <v-row no-gutters class="mt-8 mb-12">
      <v-col cols="6" align="start">
        <p class="text-h5 font-weight-bold">
          Импорт файлов
        </p>
      </v-col>
      <v-col cols="6" align="end">
        <the-dialog/>
      </v-col>
    </v-row>
    <v-row no-gutters class="mb-4">
      <v-col cols="3" class="mr-4">
        <v-text-field
          v-model="search"
          label="Поиск"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          color="secondary"
          hide-details
          single-line
        ></v-text-field>
      </v-col>
      <v-col cols="3" class="mr-4">
        <v-select
          clearable
          label="Статус"
          :items="arrayStatus"
          variant="solo-filled"
          color="secondary"
        ></v-select>
      </v-col>
      <v-col cols="auto" class="mr-4">
        <v-checkbox label="Обработан" color="secondary"></v-checkbox>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :loading="loading"
          items-per-page-text="Элементов на странице"
          items-per-page="5"
        >
        <template v-slot:header.id> id </template>
        <template v-slot:item.id="{ item }">
          <p>
            {{ item.id }}
          </p>
        </template>
        <template v-slot:header.name> Название файла </template>
        <template v-slot:item.name="{ item }">
          <a :href="item.file.url" target="_blank" style="color: #4785EE; text-decoration: none;">
            {{ item.file.name }}
          </a>
        </template>
        <template v-slot:header.status> Статус </template>
        <template v-slot:item.status="{ item }">
          <p :style="`color: ${item.status.color};`">
            {{ item.status.name }}
          </p>
        </template>
        <template v-slot:header.data> Дата загрузки </template>
        <template v-slot:item.data="{ item }">
          <p>
            {{ formatedData(item.created_at) }}
          </p>
        </template>
        <template v-slot:header.amount> Кол-во кредитных договоров </template>
        <template v-slot:item.amount="{ item }">
          <p>
            {{ item.credits_count }}
          </p>
        </template>
        <template v-slot:header.user> Загружено пользователем </template>
        <template v-slot:item.user="{ item }">
          <p>
            {{ item.created_by.username }}
          </p>
        </template>
        <template v-slot:header.actions> Действия </template>
        <template v-slot:item.actions="{ item }">
          <v-btn variant="text" @click="getExport(item.id)">
            <v-img src="../assets/images/download.svg" aspect-ratio="1/1" :width="15"/>
          </v-btn>
          <v-btn variant="text" @click="deleteProducts(item.id)">
            <v-img src="../assets/images/delete.svg" aspect-ratio="1/1" :width="15"/>
          </v-btn>
        </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.container{
  background-color: rgb(243, 243, 243);
  height: 100%;

  .v-table {
    border-radius: 8px;
  }
}
</style>

<script lang="ts">
import api from "@/scripts/api";
import { useAppStore } from '@/stores/app';

export default {
  data () {
    let store = useAppStore();
    return {
      store: store,
      search: '',
      loading: true,
      headers: [
        {
          align: 'start',
          key: 'id',
          sortable: false,
          title: 'ID',
        },
        { key: 'name', title: 'Название файла' },
        { key: 'status', title: 'Статус' },
        { key: 'data', title: 'Дата загрузки' },
        { key: 'amount', title: 'Кол-во кредитных договоров' },
        { key: 'user', title: 'Загружено пользователем' },
        { key: 'actions', title: 'Действия', align: 'center' },
      ],
      items: [] 
    }
  },
  mounted(){
    this.getProduct()
  },
  computed:{
    arrayStatus(){
      return this.items.map(item => item.status.name).filter((elem, index, self) => {
          return index === self.indexOf(elem);
      })
    },
  },
  methods:{
    getProduct(){
      this.loading = true;
      api.getProducts().then(res => {
        this.store.products = this.items = res.data;
        this.loading = false;
      })
    },
    formatedData(data: string){
      let date = new Date(data);
      let MyDateString = ('0' + date.getDate()).slice(-2) + '.'
                        + ('0' + (date.getMonth()+1)).slice(-2) + '.'
                        + date.getFullYear();
      return MyDateString
    },
    getExport(id: number){
      api.getExport(id).then(res => {
        console.log(res.data);
      })
    },
    deleteProducts(id: number){
      api.deleteProducts(id).then(res => {
        console.log(res.data);
      })
    },
  }
}
</script>
