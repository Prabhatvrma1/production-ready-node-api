const landingPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acquisitions API</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #000000;
            --card-bg: #0a0a0a;
            --accent-glow: radial-gradient(circle at top, rgba(99, 102, 241, 0.08), transparent 80%);
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
            padding: 2rem 0;
        }

        .container {
            max-width: 650px;
            width: 90%;
            padding: 2.5rem;
            background: rgba(10, 10, 10, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 24px;
            backdrop-filter: blur(16px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
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
            margin-bottom: 1.5rem;
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
            cursor: pointer;
            border: none;
            outline: none;
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .btn-primary:hover:not(:disabled) {
            background: var(--primary-hover);
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-primary);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover:not(:disabled) {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
        }

        /* Endpoints section styles */
        .endpoints-section {
            text-align: left;
            margin-top: 2.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 2rem;
        }

        .endpoints-section h2 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #ffffff, #9ca3af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .endpoints-list {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .endpoint-group h3 {
            font-size: 0.95rem;
            font-weight: 600;
            color: #e5e7eb;
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .endpoint-group h3 code {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.85rem;
            color: #a5b4fc;
        }

        .endpoint-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.04);
            border-radius: 12px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            transition: all 0.2s ease;
            margin-bottom: 0.5rem;
        }

        .endpoint-item:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.08);
            transform: translateX(4px);
        }

        .method {
            font-size: 0.75rem;
            font-weight: 800;
            padding: 4px 8px;
            border-radius: 6px;
            min-width: 65px;
            text-align: center;
        }

        .method.get { background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.2); }
        .method.post { background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); }
        .method.patch { background: rgba(245, 158, 11, 0.1); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.2); }
        .method.delete { background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); }

        .path {
            font-family: monospace;
            font-size: 0.9rem;
            color: #f3f4f6;
            font-weight: 600;
        }

        .auth {
            font-size: 0.75rem;
            font-weight: 600;
            padding: 2px 8px;
            border-radius: 4px;
            margin-left: auto;
        }

        .auth.public { background: rgba(156, 163, 175, 0.1); color: #9ca3af; border: 1px solid rgba(156, 163, 175, 0.2); }
        .auth.secure { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; border: 1px solid rgba(139, 92, 246, 0.2); }

        .desc {
            width: 100%;
            font-size: 0.85rem;
            color: var(--text-secondary);
            margin-top: 4px;
            padding-left: 77px;
        }

        /* Playground section styles */
        .playground-section {
            text-align: left;
            margin-top: 2.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 2rem;
        }

        .playground-section h2 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #ffffff, #9ca3af);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .playground-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.25rem;
        }

        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: #d1d5db;
            margin-bottom: 0.5rem;
        }

        .form-select, .form-input {
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 10px 14px;
            color: white;
            font-family: inherit;
            font-size: 0.95rem;
            transition: all 0.2s ease;
        }

        .form-select:focus, .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }

        .dynamic-fields {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 0.5rem;
        }

        .response-box {
            margin-top: 1.5rem;
            background: #050505;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 1rem;
            max-height: 250px;
            overflow-y: auto;
            display: none;
        }

        .response-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-bottom: 6px;
        }

        .response-status {
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
        }

        .response-status.status-2xx { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .response-status.status-error { background: rgba(239, 68, 68, 0.1); color: #ef4444; }

        .response-json {
            font-family: monospace;
            font-size: 0.85rem;
            white-space: pre-wrap;
            color: #34d399;
            text-align: left;
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

        @media (max-width: 600px) {
            .auth { margin-left: 0; }
            .desc { padding-left: 0; margin-top: 8px; }
            .endpoint-item { flex-direction: column; align-items: flex-start; gap: 8px; }
            .buttons { flex-direction: column; gap: 8px; }
            .dynamic-fields { grid-template-columns: 1fr; }
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

        <!-- Endpoints Explorer -->
        <div class="endpoints-section">
            <h2>API Endpoint Explorer</h2>
            <div class="endpoints-list">
                <!-- Group: Auth -->
                <div class="endpoint-group">
                    <h3>Authentication — <code>/api/auth</code></h3>
                    
                    <div class="endpoint-item">
                        <span class="method post">POST</span>
                        <code class="path">/api/auth/sign-up</code>
                        <span class="auth public">Public</span>
                        <div class="desc">Registers a new user inside the database</div>
                    </div>
                    
                    <div class="endpoint-item">
                        <span class="method post">POST</span>
                        <code class="path">/api/auth/sign-in</code>
                        <span class="auth public">Public</span>
                        <div class="desc">Authenticates user and returns an HttpOnly token cookie</div>
                    </div>

                    <div class="endpoint-item">
                        <span class="method post">POST</span>
                        <code class="path">/api/auth/sign-out</code>
                        <span class="auth public">Public</span>
                        <div class="desc">Clears the active authentication session cookie</div>
                    </div>
                </div>

                <!-- Group: Users -->
                <div class="endpoint-group">
                    <h3>Users Management — <code>/api/users</code></h3>
                    
                    <div class="endpoint-item">
                        <span class="method get">GET</span>
                        <code class="path">/api/users</code>
                        <span class="auth secure">Auth Required</span>
                        <div class="desc">Retrieves a list of all registered users</div>
                    </div>
                    
                    <div class="endpoint-item">
                        <span class="method get">GET</span>
                        <code class="path">/api/users/:id</code>
                        <span class="auth secure">Auth Required</span>
                        <div class="desc">Retrieves a specific user profile by their database ID</div>
                    </div>

                    <div class="endpoint-item">
                        <span class="method patch">PATCH</span>
                        <code class="path">/api/users/:id</code>
                        <span class="auth secure">Self / Admin</span>
                        <div class="desc">Updates user details (Role updates restricted to Admins)</div>
                    </div>

                    <div class="endpoint-item">
                        <span class="method delete">DELETE</span>
                        <code class="path">/api/users/:id</code>
                        <span class="auth secure">Self / Admin</span>
                        <div class="desc">Permanently removes a user from the database</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Interactive Playground -->
        <div class="playground-section">
            <h2>Interactive API Playground</h2>
            <div class="playground-card">
                <div class="form-group">
                    <label for="endpoint-select">Select Endpoint</label>
                    <select id="endpoint-select" class="form-select">
                        <option value="signup">POST /api/auth/sign-up (Register)</option>
                        <option value="signin">POST /api/auth/sign-in (Login)</option>
                        <option value="signout">POST /api/auth/sign-out (Logout)</option>
                        <option value="getusers">GET /api/users (Get All Users)</option>
                        <option value="getuserbyid">GET /api/users/:id (Get User by ID)</option>
                        <option value="deleteuser">DELETE /api/users/:id (Delete User)</option>
                    </select>
                </div>

                <div id="dynamic-fields" class="dynamic-fields">
                    <!-- Fields injected dynamically -->
                </div>

                <button id="send-btn" class="btn btn-primary" style="width: 100%; justify-content: center;">Send Request</button>

                <div id="response-box" class="response-box">
                    <div class="response-header">
                        <span>RESPONSE JSON</span>
                        <span id="response-status" class="response-status">PENDING</span>
                    </div>
                    <pre id="response-json" class="response-json">Waiting for request...</pre>
                </div>
            </div>
        </div>

        <footer>
            Built with ❤️ by <a href="https://github.com/Prabhatvrma1" target="_blank">Prabhat Verma</a>
        </footer>
    </div>

    <!-- Playground Interactive Logic -->
    <script>
        const endpointSelect = document.getElementById('endpoint-select');
        const dynamicFields = document.getElementById('dynamic-fields');
        const responseBox = document.getElementById('response-box');
        const responseJson = document.getElementById('response-json');
        const responseStatus = document.getElementById('response-status');
        const sendBtn = document.getElementById('send-btn');

        const fieldsConfig = {
            'signup': [
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', value: 'John Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', value: 'john@example.com' },
                { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••', value: 'securepassword' },
                { name: 'role', label: 'Role', type: 'select', options: ['user', 'admin'], value: 'user' }
            ],
            'signin': [
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', value: 'john@example.com' },
                { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••', value: 'securepassword' }
            ],
            'signout': [],
            'getusers': [],
            'getuserbyid': [
                { name: 'id', label: 'User ID', type: 'text', placeholder: '1', value: '1' }
            ],
            'deleteuser': [
                { name: 'id', label: 'User ID', type: 'text', placeholder: '1', value: '1' }
            ]
        };

        function renderFields() {
            const selected = endpointSelect.value;
            const fields = fieldsConfig[selected] || [];
            dynamicFields.innerHTML = '';

            fields.forEach(field => {
                const group = document.createElement('div');
                group.className = 'form-group';
                
                const label = document.createElement('label');
                label.textContent = field.label;
                group.appendChild(label);

                if (field.type === 'select') {
                    const select = document.createElement('select');
                    select.className = 'form-select';
                    select.name = field.name;
                    field.options.forEach(opt => {
                        const o = document.createElement('option');
                        o.value = opt;
                        o.textContent = opt;
                        if (opt === field.value) o.selected = true;
                        select.appendChild(o);
                    });
                    group.appendChild(select);
                } else {
                    const input = document.createElement('input');
                    input.className = 'form-input';
                    input.type = field.type;
                    input.name = field.name;
                    input.placeholder = field.placeholder;
                    input.value = field.value || '';
                    group.appendChild(input);
                }
                dynamicFields.appendChild(group);
            });

            if (fields.length === 0) {
                dynamicFields.style.display = 'none';
            } else {
                dynamicFields.style.display = 'grid';
            }
        }

        endpointSelect.addEventListener('change', renderFields);
        renderFields();

        sendBtn.addEventListener('click', async () => {
            const selected = endpointSelect.value;
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';
            responseBox.style.display = 'block';
            responseJson.textContent = 'Waiting for response...';
            responseStatus.textContent = 'PENDING';
            responseStatus.className = 'response-status';

            let url = '';
            let method = 'GET';
            let body = null;

            const inputs = dynamicFields.querySelectorAll('input, select');
            const data = {};
            inputs.forEach(input => {
                data[input.name] = input.value;
            });

            switch (selected) {
                case 'signup':
                    url = '/api/auth/sign-up';
                    method = 'POST';
                    body = JSON.stringify(data);
                    break;
                case 'signin':
                    url = '/api/auth/sign-in';
                    method = 'POST';
                    body = JSON.stringify(data);
                    break;
                case 'signout':
                    url = '/api/auth/sign-out';
                    method = 'POST';
                    break;
                case 'getusers':
                    url = '/api/users';
                    method = 'GET';
                    break;
                case 'getuserbyid':
                    url = \`/api/users/\${data.id}\`;
                    method = 'GET';
                    break;
                case 'deleteuser':
                    url = \`/api/users/\${data.id}\`;
                    method = 'DELETE';
                    break;
            }

            try {
                const res = await fetch(url, {
                    method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body
                });

                const json = await res.json();
                responseStatus.textContent = \`\${res.status} \${res.statusText}\`;
                if (res.ok) {
                    responseStatus.className = 'response-status status-2xx';
                    responseJson.style.color = '#34d399';
                } else {
                    responseStatus.className = 'response-status status-error';
                    responseJson.style.color = '#f87171';
                }
                responseJson.textContent = JSON.stringify(json, null, 2);
            } catch (err) {
                responseStatus.textContent = 'ERROR';
                responseStatus.className = 'response-status status-error';
                responseJson.style.color = '#f87171';
                responseJson.textContent = \`Network error: \${err.message}\`;
            } finally {
                sendBtn.disabled = false;
                sendBtn.textContent = 'Send Request';
            }
        });
    </script>
</body>
</html>`;

export default landingPage;
