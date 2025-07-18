<template>
<div class="bg-gray-50 text-gray-800">
    <header class="bg-indigo-600 text-white p-4">
        <div class="max-w-6xl mx-auto">
            <h1 class="text-2xl font-bold">💡 Ideas</h1>
            <p class="text-sm">Inspiración para tu próximo proyecto de desarrollo</p>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-6 space-y-10">
        <section>
            <h2 class="text-xl font-semibold text-indigo-700 mb-2">🚀 Bienvenido a Ideas</h2>
            <p>Este es un repositorio de conceptos para desarrollar aplicaciones móviles y web. Aquí encontrarás diferentes ideas completas con su estructura, funcionalidades y stack técnico sugerido.</p>
        </section>

        <section>
            <h2 class="text-xl font-semibold text-indigo-700 mb-4">📂 Proyectos disponibles</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Proyecto 1 -->
                <a href="tokendesk.html" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-coins text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">TokenDesk</h3>
                    </div>
                    <p class="text-sm text-gray-600">Sistema de recompensas simbólicas para comunidades</p>
                </a>
                
                <!-- Proyecto 2 -->
                <a href="#" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-calendar-check text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">HabitSync</h3>
                    </div>
                    <p class="text-sm text-gray-600">Plataforma para construir hábitos en grupo</p>
                </a>
                
                <!-- Proyecto 3 -->
                <a href="#" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-microphone-alt text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">VoiceNotes</h3>
                    </div>
                    <p class="text-sm text-gray-600">Organizador de notas de voz con IA</p>
                </a>
                
                <!-- Proyecto 4 -->
                <a href="#" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-leaf text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">EcoTrack</h3>
                    </div>
                    <p class="text-sm text-gray-600">Monitor de impacto ecológico personal</p>
                </a>
                
                <!-- Proyecto 5 -->
                <a href="#" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-book-open text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">StoryForge</h3>
                    </div>
                    <p class="text-sm text-gray-600">Creación colaborativa de historias</p>
                </a>
                
                <!-- Proyecto 6 -->
                <a href="#" class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-2">
                        <div class="bg-indigo-100 p-2 rounded-full mr-3">
                            <i class="fas fa-utensils text-indigo-600"></i>
                        </div>
                        <h3 class="font-semibold text-indigo-600">RecipeAI</h3>
                    </div>
                    <p class="text-sm text-gray-600">Generador de recetas con lo que tengas en casa</p>
                </a>
            </div>
        </section>

        <section>
            <h2 class="text-xl font-semibold text-indigo-700 mb-2">✨ ¿Cómo usar este sitio?</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Explora los proyectos disponibles</li>
                <li>Cada idea incluye estructura, funcionalidades y stack técnico</li>
                <li>Usa estos conceptos como inspiración para tus propios desarrollos</li>
                <li>¿Tienes una idea? <a href="#" class="text-indigo-600 hover:underline">¡Compártela!</a></li>
            </ul>
        </section>

        <section class="bg-indigo-50 p-4 rounded-lg">
            <h2 class="text-xl font-semibold text-indigo-700 mb-2">💡 Próximamente</h2>
            <p>Estamos trabajando en nuevas ideas para agregar a la colección. Algunas de las próximas incluyen:</p>
            <ul class="list-disc pl-5 mt-2 text-sm">
                <li>SkillSwap - Plataforma de intercambio de habilidades</li>
                <li>MoodTracker - Seguimiento emocional con análisis predictivo</li>
                <li>LocalEats - Descubre restaurantes locales fuera de los circuitos turísticos</li>
            </ul>
        </section>
    </main>

    <footer class="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © 2023 Ideas - Proyectos para desarrollar apps. Todos los derechos reservados.
    </footer>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>