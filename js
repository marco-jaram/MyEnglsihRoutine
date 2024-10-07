function updateTimelines() {
            const now = new Date();
            // Uncomment the following line and comment out the line above to test with a specific date
            // const now = new Date('2024-11-01');

            document.querySelectorAll('.timeline-item').forEach(item => {
                const start = new Date(item.dataset.start);
                const end = new Date(item.dataset.end);
                const total = end - start;
                const elapsed = now - start;
                
                let progress = Math.max(0, Math.min(100, (elapsed / total) * 100));
                
                const progressBar = item.querySelector('.timeline-progress');
                const todayMarker = item.querySelector('.timeline-today');
                
                progressBar.style.width = `${progress}%`;
                todayMarker.style.left = `${progress}%`;
                
                // Hide today marker if it's before start or after end
                if (now < start || now > end) {
                    todayMarker.style.display = 'none';
                } else {
                    todayMarker.style.display = 'block';
                }
            });
        }

        // Update timelines immediately and then every minute
        updateTimelines();
        setInterval(updateTimelines, 60000);


        