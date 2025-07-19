<template>
<div class="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100 min-h-screen flex flex-col">
    <header class="bg-black/30 text-white py-6 shadow-2xl">
        <div class="max-w-4xl mx-auto text-center px-4">
            <h1 class="text-4xl font-bold mb-2">💡 ¿Quién quiere ser millonario? 💡</h1>
            <p class="text-lg text-gray-300">Listado de proyectos de desarrollo</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-8 space-y-14 flex-grow">
        <section class="bg-black/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center">
            <h2 class="text-3xl font-semibold text-white mb-4">🚀 Bienvenido a Ideas</h2>
            <p class="text-xl text-gray-200 leading-relaxed">Este es un repositorio de conceptos para desarrollar aplicaciones móviles y web. Aquí encontrarás diferentes ideas completas con su estructura, funcionalidades y stack técnico sugerido.</p>
        </section>

        <section class="text-center">
            <h2 class="text-3xl font-semibold text-white mb-8">📂 Proyectos disponibles</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <!-- Proyecto 1 -->
                <NuxtLink to="/tokendesk" class="group bg-gray-800/70 hover:bg-gray-700/80 border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-purple-500/50 hover:-translate-y-1 transform">
                    <div class="flex flex-col items-center text-center">
                        <div class="bg-purple-500/20 group-hover:bg-purple-500/30 p-4 rounded-full mb-4 transition-colors w-16 h-16 flex items-center justify-center">
                            <span class="material-icons text-3xl text-purple-300">monetization_on</span>
                        </div>
                        <h3 class="font-bold text-white text-2xl mb-2">TokenDesk</h3>
                        <p class="text-lg text-gray-300">Sistema de recompensas simbólicas para comunidades</p>
                    </div>
                </NuxtLink>
                
                <!-- Proyecto 2 -->
                <NuxtLink to="/recipeai" class="group bg-gray-800/70 hover:bg-gray-700/80 border border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-purple-500/50 hover:-translate-y-1 transform">
                    <div class="flex flex-col items-center text-center">
                        <div class="bg-purple-500/20 group-hover:bg-purple-500/30 p-4 rounded-full mb-4 transition-colors w-16 h-16 flex items-center justify-center">
                            <span class="material-icons text-3xl text-purple-300">restaurant</span>
                        </div>
                        <h3 class="font-bold text-white text-2xl mb-2">RecipeAI</h3>
                        <p class="text-lg text-gray-300">Generador de recetas con lo que tengas en casa</p>
                    </div>
                </NuxtLink>
            </div>
        </section>
    </main>
</div>
</template>

<script setup lang="ts">
// No se necesita lógica adicional para este componente
</script>

<style scoped>

a {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>