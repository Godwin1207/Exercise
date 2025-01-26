import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};