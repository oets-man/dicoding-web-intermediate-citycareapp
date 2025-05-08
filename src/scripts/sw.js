self.addEventListener('push', (event) => {
  console.log('Service worker pushing...');

  async function chainPromise() {
    // await self.registration.showNotification('Ada laporan baru untuk Anda!', {
    //   body: 'Terjadi kerusakan lampu jalan di Jl. Melati',
    // });
    const data = await event.data.json();
    await self.registration.showNotification(data.title, {
      body: data.options.body,
    });
  }

  event.waitUntil(chainPromise());
  console.log('done pushing...');
});
