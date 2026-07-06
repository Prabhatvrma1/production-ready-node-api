const landingPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acquisitions API</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #0b0f19;
            --card-bg: #111827;
            --accent-glow: radial-gradient(circle at top, rgba(99, 102, 241, 0.15), transparent 80%);
            --text-primary: #f3f4f6;
            --text-secondary: #9ca3af;
            --primary: #6366f1;
            --primary-hover: #4f46e5;
            --success: #10b981;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: var(--accent-glow);
            overflow-x: hidden;
        }

        .container {
            max-width: 650px;
            width: 90%;
            padding: 2.5rem;
            background: rgba(17, 24, 39, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            backdrop-filter: blur(16px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            text-align: center;
            position: relative;
            animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(16, 185, 129, 0.1);
            color: var(--success);
            padding: 6px 16px;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
            border: 1px solid rgba(16, 185, 129, 0.2);
            margin-bottom: 1.5rem;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: var(--success);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--success);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #a5b4fc, #6366f1, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
            letter-spacing: -0.025em;
        }

        .subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-bottom: 2.5rem;
        }

        .tech-tag {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #d1d5db;
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 0.8rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .tech-tag:hover {
            background: rgba(99, 102, 241, 0.1);
            border-color: rgba(99, 102, 241, 0.3);
            color: #a5b4fc;
            transform: translateY(-2px);
        }

        .buttons {
            display: flex;
            gap: 12px;
            justify-content: center;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            border-radius: 12px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            font-size: 0.95rem;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover {
            background: var(--primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
        }

        footer {
            margin-top: 2.5rem;
            font-size: 0.75rem;
            color: var(--text-secondary);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 1.5rem;
        }

        footer a {
            color: var(--primary);
            text-decoration: none;
        }

        footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status-badge">
            <span class="status-dot"></span>
            API Status: Operational
        </div>
        <h1>Acquisitions API</h1>
        <p class="subtitle">A production-ready RESTful API built with Express.js, featuring Neon Serverless PostgreSQL, Drizzle ORM, Zod validations, Arcjet bot protection & rate-limiting, and fully automated CI/CD.</p>
        
        <div class="tech-stack">
            <span class="tech-tag">Node.js 20</span>
            <span class="tech-tag">Express.js 5</span>
            <span class="tech-tag">PostgreSQL</span>
            <span class="tech-tag">Drizzle ORM</span>
            <span class="tech-tag">Arcjet Security</span>
            <span class="tech-tag">Winston Logger</span>
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">GitHub Actions</span>
        </div>

        <div class="buttons">
            <a href="/health" class="btn btn-primary">Check Health</a>
            <a href="/api" class="btn btn-secondary">API Metadata</a>
            <a href="https://github.com/Prabhatvrma1/production-ready-node-api" target="_blank" class="btn btn-secondary">GitHub Repository</a>
        </div>

        <footer>
            Built with ❤️ by <a href="https://github.com/Prabhatvrma1" target="_blank">Prabhat Verma</a>
        </footer>
    </div>
</body>
</html>`;

export default landingPage;
