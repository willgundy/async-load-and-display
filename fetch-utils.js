const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYnp4bXNrYWdwcm92cWNjcm1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1NTM0MzksImV4cCI6MTk2MzEyOTQzOX0.wkKK4FheZyrNrf7B04tLKfQuyVwpMO3ycPvoUWD6S9M';

const SUPABASE_URL = 'https://rbbzxmskagprovqccrmk.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getTeams() {
    const response = await client
        .from('premier_league_teams')
        .select('*');

    return response.body;
}

export async function getStandings() {
    const response = await client
        .from('premier_league_standings')
        .select('*');

    return response.body;
}