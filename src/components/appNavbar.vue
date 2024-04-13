<template>
    <v-navigation-drawer :disable-resize-watcher="false" :width="240" style="display: flex; align-items: center;">
        <v-sheet style="display: flex;" :width="200">
            <v-list density="comfortable" v-model:opened="open">
                <v-list-item value="Organizations" class="mb-1">
                    <v-container class="container_item">
                        <v-row no-gutters>
                            <v-col cols="2" align-self="center">
                                <v-icon size="18" class="icon" icon="mdi-domain"></v-icon>
                            </v-col>
                            <v-col cols="9" align-self="center">
                                <p class="item_list">
                                    Организации
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item>

                <v-list-group value="Staff" class="mb-1">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" class="item">
                            <v-container class="container_item">
                                <v-row no-gutters>
                                    <v-col cols="3" align-self="center">
                                        <v-icon size="18" class="icon" icon="mdi-account-supervisor-outline"></v-icon>
                                    </v-col>
                                    <v-col cols="9" align-self="center">
                                        <p class="item_list">
                                            Персонал
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list-item>
                    </template>
                </v-list-group>

                <v-list-group value="Loans" class="mb-1">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" class="item">
                            <v-container class="container_item">
                                <v-row no-gutters>
                                    <v-col cols="3" align-self="center">
                                        <v-icon size="18" class="icon" icon="mdi-credit-card-outline"></v-icon>
                                    </v-col>
                                    <v-col cols="9" align-self="center">
                                        <p class="item_list">
                                            Кредиты
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list-item>
                    </template>
                </v-list-group>

                <v-list-group value="Correspondence" class="mb-1">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" class="item">
                            <v-container class="container_item">
                                <v-row no-gutters>
                                    <v-col cols="3" align-self="center">
                                        <v-icon size="18" class="icon" icon="mdi-email-multiple-outline"></v-icon>
                                    </v-col>
                                    <v-col cols="9" align-self="center">
                                        <p class="item_list">
                                            Корреспонденция
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list-item>
                    </template>
                </v-list-group>

                <v-list-group value="Assignment" class="mb-1">
                    <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" class="item">
                        <v-container class="container_item">
                            <v-row no-gutters>
                                <v-col cols="3" align-self="center">
                                    <v-icon size="18" class="icon" icon="mdi-file-document-outline"></v-icon>
                                </v-col>
                                <v-col cols="9" align-self="center">
                                    <p class="item_list">
                                        Цессия
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-list-item>
                    </template>

                    <v-list-item value="Analytics">
                        <v-container class="container_item">
                            <v-row no-gutters>
                                <v-col cols="12" align-self="center">
                                    <p class="item_list">
                                        Аналитика
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-list-item>
                    <v-list-item value="Contracts">
                        <v-container class="container_item">
                            <v-row no-gutters>
                                <v-col cols="12" align-self="center">
                                    <p class="item_list">
                                        Договоры
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-list-item>
                    <v-list-item value="Import">
                        <v-container class="container_item">
                            <v-row no-gutters>
                                <v-col cols="12" align-self="center">
                                    <p class="item_list">
                                        Импорт
                                    </p>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-list-item>
                </v-list-group>

                <v-list-item value="Settings" class="mb-1">
                    <v-container class="container_item">
                        <v-row no-gutters>
                            <v-col cols="3" align-self="center">
                                <v-icon size="18" class="icon" icon="mdi-cog-outline"></v-icon>
                            </v-col>
                            <v-col cols="9" align-self="center">
                                <p class="item_list">
                                    Настройки
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.container_item{
    padding: 0;

    .item_list{
        font-size: 12px;
        font-weight: 500;
        color: black;
    }
    .icon{
        color: grey;
    }
}
.v-list-group--open .item{
    background-color: #42B277;
    color: white;
    border-radius: 4px;

    .icon{
        color: white;
    }
}
.v-list-group--open .item.v-list-item--active{
    .item_list{
        color: white;
    }
}
.v-list-item--active{
    .item_list{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #42B277;

        &::before{
            content: '';
            display: flex;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            margin-right: 6px;
            background-color: #42B277;
        }
    }
}
</style>

<script lang="ts">
  export default {
    data: () => ({
        open: ["Assignment"],
    }),
  }
</script>