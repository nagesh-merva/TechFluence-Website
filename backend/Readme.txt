Initial requirements 
    Python must be downloaded
    Must be in the correct directory

Run 
    pip install -r requirements.txt  ====> installs all required packages
    python manage.py runserver  ====> starts development server


API Endpoints

    /api/fetch-instagram  ===> call this api before calling instagram-media api. fetches and stores new reels and posts 

    /api/instagram-media    ===> actuallly fetches the media

        returns data in followinf format:
        [
            {
                "id": 2,
                "media_id": "18490848325017935",
                "media_type": "IMAGE",
                "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/484053599_1406928520297288_305159765513752481_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=YfVwXQjVhFUQ7kNvgG1PQf6&_nc_oc=AdhUZOCV6TTugAh1xFY6eXbiFyKQfFAh60Hl-TRQnRWv6RzpcFwW-_nO9lX0BsS9LIQ&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&_nc_gid=Azjz3_dCG4ehEHXhWiCN8Ev&oh=00_AYFfF8EjeOTchLhXM4bbGAFGUMVusoALscDIRay2Q254Iw&oe=67D603D4",
                "caption": "#testTechfluence",
                "permalink": "https://www.instagram.com/p/DHDD5x1TQ0C/",
                "timestamp": "2025-03-11T11:50:00.966739Z"
            },
            {
                "id": 1,
                "media_id": "17857282470388189",
                "media_type": "IMAGE",
                "media_url": "https://scontent.cdninstagram.com/v/t51.75761-15/483876808_17842205520445649_7721973953638930132_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=CFywJqmVQFgQ7kNvgHky5Gv&_nc_oc=AdhZVDJwBqcDLBDNKxZNUwzAS-OZHIc83SO13GcOrIeEyFQkoj5aPWLVsG_fh0kvHig&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=APCawUEEAAAA&_nc_gid=Azjz3_dCG4ehEHXhWiCN8Ev&oh=00_AYGCnrLq5krimOc7te3cS0V24iRSUjwo0gYsFaNeXG8qaQ&oe=67D5DE57",
                "caption": "#testTechfluence hfluence",
                "permalink": "https://www.instagram.com/p/DHC-mdrTX7k/",
                "timestamp": "2025-03-11T11:50:00.959889Z"
            }
        ]

    /api/events  ===> Get Winners data
        returns data in following format:
        [
            {
                "id": 1,
                "name": "NEON ODYSSEY",
                "description": "NAVIGATE THROUGH DIGITAL LABYRINTHS IN THIS IMMERSIVE REALITY CHALLENGE.",
                "winners": [
                    {
                        "id": 1,
                        "name": "ARIA NOVA",
                        "prize": "12,000",
                        "image": "http://localhost:8000/media/winners/download_6.jpg"
                    }
                ]
            }
        ]
