<template>
    <v-app-bar :elevation="2" scroll-behavior="hide" scroll-threshold="300" height="72">
        <template v-slot:prepend>
            <v-avatar image="../assets/images/logo.png" size="66"></v-avatar>
        </template>

        <v-spacer/>
        <template v-slot:append>
            <v-sheet class="mr-3">
                Фамилия Имя
            </v-sheet>
            <v-avatar image="../assets/images/user.png" size="40"></v-avatar>
        </template>
    </v-app-bar>
</template>