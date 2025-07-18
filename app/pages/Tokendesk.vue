<template>


    <div class="bg-gray-50 text-gray-800">
        <header class="bg-indigo-600 text-white p-4">
            <div class="max-w-6xl mx-auto">
                <h1 class="text-2xl font-bold">📘 TokenDesk Documentation</h1>
                <p class="text-sm">Recompensas simbólicas, impacto real</p>
            </div>
        </header>

        <main class="max-w-6xl mx-auto px-4 py-6 space-y-10">
            <section>
                <h2 class="text-xl font-semibold text-indigo-700 mb-2">🎯 Resumen del concepto</h2>
                <p>Un caso de uso destacado son los <strong>influencers y sus comunidades</strong>. Un influencer puede
                    entregar tokens a sus seguidores por participar en dinámicas, compartir contenido, realizar retos o
                    apoyar campañas. Estos tokens pueden canjearse por beneficios como acceso exclusivo, productos
                    personalizados, menciones o participación en sorteos.</p>
            </section>

            <section>
                <h2 class="text-xl font-semibold text-indigo-700 mb-2">🧱 Estructura de la app</h2>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Líder:</strong> Crea monedas, define reglas, reparte tokens, configura recompensas.</li>
                    <li><strong>Miembro:</strong> Acumula tokens y los canjea por beneficios.</li>
                </ul>
            </section>

            <section>
                <h2 class="text-xl font-semibold text-indigo-700 mb-2">📲 Funcionalidades por módulo</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-semibold text-indigo-600">Panel del líder</h3>
                        <ul class="list-disc pl-5 text-sm">
                            <li>Crear y editar tokens</li>
                            <li>Crear tareas que otorgan tokens</li>
                            <li>Definir recompensas</li>
                            <li>Asignar tokens manualmente</li>
                            <li>Ver actividad de los miembros</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-indigo-600">Panel del miembro</h3>
                        <ul class="list-disc pl-5 text-sm">
                            <li>Ver saldo y tareas asignadas</li>
                            <li>Marcar tareas como cumplidas</li>
                            <li>Acceder al marketplace</li>
                            <li>Ver historial</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2 class="text-xl font-semibold text-indigo-700 mb-2">🔁 Módulo de transacciones entre miembros (P2P)
                </h2>
                <p class="mb-2">El líder puede activar una economía entre miembros donde estos pueden enviarse tokens
                    entre sí o intercambiarlos por favores u objetos simbólicos.</p>
                <ul class="list-disc pl-5 text-sm">
                    <li>Enviar tokens con motivo</li>
                    <li>Crear ofertas públicas</li>
                    <li>Ver historial de intercambios</li>
                    <li>Bloquear abusos o configurar límites desde el panel de líder</li>
                </ul>
            </section>

            <section>
                <h2 class="text-xl font-semibold text-indigo-700 mb-2">🛠️ Stack técnico sugerido</h2>
                <ul class="list-disc pl-5 text-sm">
                    <li>Frontend: Ionic + Vue 3 + Capacitor</li>
                    <li>Backend: Express.js con TypeScript</li>
                    <li>Base de datos: PostgreSQL o PlanetScale</li>
                    <li>Hosting: Vercel (frontend) + Railway (backend)</li>
                    <li>Storage: Firebase o Supabase</li>
                    <li>Auth: JWT con roles (líder, miembro)</li>
                </ul>
            </section>
        </main>

                <section class="max-w-6xl mx-auto px-4 py-6">
            <h2 class="text-xl font-semibold text-indigo-700 mb-2">🏆 Competencia</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-indigo-600">Bonusly</h3>
                    <p class="text-sm mt-1">Plataforma de reconocimiento entre pares con más de 500,000 usuarios en empresas.</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="font-semibold text-indigo-600">Nectar</h3>
                    <p class="text-sm mt-1">Solución de recompensas y reconocimiento con más de 1 millón de usuarios.</p>
                </div>
            </div>
        </section>
        
        <footer class="bg-gray-100 text-center py-4 text-sm text-gray-600">
            © 2025 TokenDesk. Todos los derechos reservados.
        </footer>
    </div>


</template>
