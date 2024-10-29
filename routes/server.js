// server.js (add this line after defining app.use(cors()))
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

