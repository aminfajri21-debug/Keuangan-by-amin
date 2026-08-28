self.addEventListener('fetch', (event) => {
    if (event.request.method === 'POST') {
        event.respondWith((async () => {
            const formData = await event.request.formData();
            const title = formData.get('title') || '';
            const text = formData.get('text') || '';
            const url = formData.get('url') || '';
            
            return Response.redirect(`./index.html?title=${encodeURIComponent(title)}&text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, 303);
        })());
    }
});
