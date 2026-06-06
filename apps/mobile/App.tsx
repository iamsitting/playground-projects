import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';

const queryClient = new QueryClient();

const palette = {
  light: {
    background: '#F9F6EE',
    card: '#FFFFFF',
    text: '#154734',
    accent: '#FFB81C',
    border: '#D9D2C3',
  },
  dark: {
    background: '#10251D',
    card: '#154734',
    text: '#FFF4D4',
    accent: '#FFB81C',
    border: '#2A6650',
  },
};

export default function App() {
  const mode = useColorScheme() === 'dark' ? 'dark' : 'light';
  const theme = palette[mode];

  return (
    <QueryClientProvider client={queryClient}>
      <View style={[styles.container, { backgroundColor: theme.background }]}> 
        <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}> 
          <Text style={[styles.title, { color: theme.text }]}>Baylor Platform</Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>NestJS + Expo starter is ready.</Text>
          <View style={[styles.badge, { backgroundColor: theme.accent }]}> 
            <Text style={styles.badgeText}>{mode.toUpperCase()} THEME</Text>
          </View>
        </View>
        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 460,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111111',
  },
});
