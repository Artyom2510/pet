import type { UserCred, Credentials } from '@/models/credentials';
import { createClient, type User, type AuthError } from '@supabase/supabase-js';
import { clientData } from './clientData';

// import { Credentials } from '../models/credentials';
// import { TCommonCard } from '../models/commonCard';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const createUser = async (values: Credentials) => {
  const { data, error } = await supabase.from('users').insert(values).single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const getUser = async (email: string): Promise<UserCred> => {
  const { data, error } = await supabase
    .from('users')
    .select()
    .eq('email', email);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  const { name, nickname, role, id } = data?.[0] as UserCred;

  return { name, nickname, role, id };
};

const signUp = async (values: Credentials): Promise<User | AuthError> => {
  const supabaseData = await supabase.auth.signUp(values);
  if (!supabaseData.error) {
    await createUser(values);
  }
  return clientData(supabaseData);
};

const signIn = async (values: Credentials): Promise<User> => {
  const supabaseData = await supabase.auth.signInWithPassword(values);
  return clientData(supabaseData);
};

const signOut = async () => await supabase.auth.signOut();

const getImages = async () => {
  const { data = [], error } = await supabase.storage.from('images').list();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const getImage = (id: string) => {
  const { data } = supabase.storage.from('images').getPublicUrl(`public/${id}`);

  return data;
};

// const uploadImage = async (file: RcFile) => {
//   const { uid, type } = file;
//   const { data, error } = await supabase.storage
//     .from('images')
//     .upload(`public/${uid}`, file, {
//       upsert: false,
//       contentType: type,
//     });
//   if (error) {
//     console.log(error);
//     return error;
//   }
//   if (data) {
//     return getImages();
//   }
// };

// const createGame = async (game: TCommonCard) => {
//   const { error } = await supabase.from('games').insert(game).single();
//   if (error) {
//     throw new Error(error.message);
//   }
// };

// const updateGame = async (game: Partial<TCommonCardData>) => {
//   const { id, ...rest } = game;
//   const { data, error } = await supabase
//     .from('games')
//     .update(rest)
//     .eq('id', id)
//     .single();

//   return data;
// };

// const daleteGame = async (id: number) => {
//   const { data, error } = await supabase.from('games').delete().eq('id', id);

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// };

// const getGamesList = async () => {
//   const { data = [], error } = await supabase
//     .from('games')
//     .select()
//     .order('id');

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data as TCommonCardData[];
// };

// const likedGame = async (
//   oldChoice: TChoice | null,
//   choice: TChoice,
//   id: number,
//   userId: string,
// ) => {
//   if (!oldChoice) {
//     const { data = [], error } = await supabase
//       .from('games')
//       .upsert([{ id, [choice]: [userId] }]);

//     return data;
//   }
//   const { data, error } = await supabase.from('games').select().eq('id', id);
//   const newData: TCommonCardData = { ...data?.[0] };
//   newData[choice].push(userId);
//   newData[oldChoice] = newData[oldChoice].filter(el => el !== userId);
//   await supabase.from('games').update(newData).eq('id', id).single();

//   return data || [];
// };

// const setRecord = async ({ record, userId }: TMemoGame) => {
//   const { data, error } = await supabase
//     .from('memo')
//     .update(record)
//     .eq('user_id', userId)
//     .single();

//   if (error) {
//     throw new Error(error.message);
//   }

//   return record;
// };

export {
  // likedGame,
  // createGame,
  // updateGame,
  // deleteGame,
  createUser,
  getUser,
  // getGamesList,
  signUp,
  signIn,
  signOut,
  getImages,
  getImage,
  // uploadImage,
  // setRecord,
};
