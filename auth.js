// ---------- CONNECT TO SUPABASE ----------
const supabaseUrl = "YOUR_URL_HERE";
const supabaseKey = "YOUR_ANON_KEY_HERE";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// ---------- SIGN UP ----------
async function handleSignup() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        display(error.message);
    } else {
        display("Signup successful! Check your email.");
    }
}

// ---------- LOGIN ----------
async function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        display(error.message);
    } else {
        display("Login successful!");
        window.location.href = "index.html";  // redirect after login
    }
}

function display(msg) {
    document.getElementById("message").innerText = msg;
}
