import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeHeader from '../../components/HomeHeader';
import MovieThumb from '../../components/MovieThumb';
import {Movie} from '../../models/MovieModel';
import Modal from 'react-native-modal';
import {
  getTopRatedMovies,
  getTrendingMovies,
  getTrendingTVshowsToday,
  getTrendingTVshowsWeekly,
  getUpcomingMovies,
} from '../../services/HomeServices';
import DetailsModalContent from '../../components/modals/DetailsModalContent';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [trendingTvShowsToday, setTrendingTvShowsToday] = useState<Movie[]>([]);
  const [trendingTvShowsWeekly, setTrendingTvShowsWeekly] = useState<Movie[]>(
    [],
  );
  const getData = async () => {
    try {
      const movieData = await getTrendingMovies();
      setTrendingMovies(movieData.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const movieData = await getTopRatedMovies();
      setTopRatedMovies(movieData.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const movieData = await getTrendingTVshowsToday();
      setTrendingTvShowsToday(movieData.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const movieData = await getTrendingTVshowsWeekly();
      setTrendingTvShowsWeekly(movieData.results);
    } catch (error) {
      console.log(error);
    }
    try {
      const movieData = await getUpcomingMovies();
      setUpcomingMovies(movieData.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainContentContainerStyle}>
        <HomeHeader />
        <Text style={styles.titleStyle}>Trending Movies</Text>
        <ScrollView horizontal style={styles.movieContainerStyle}>
          {trendingMovies.map((item, _i) => (
            <MovieThumb
              url={
                'https://image.tmdb.org/t/p/w300/' + item.poster_path.toString()
              }
            />
          ))}
        </ScrollView>
        <Text style={styles.titleStyle}>Top Rated Movies</Text>
        <ScrollView horizontal style={styles.movieContainerStyle}>
          {topRatedMovies.map((item, _i) => (
            <MovieThumb
              url={
                'https://image.tmdb.org/t/p/w300/' + item.poster_path.toString()
              }
            />
          ))}
        </ScrollView>
        <Text style={styles.titleStyle}>Trending TV Shows Today</Text>
        <ScrollView horizontal style={styles.movieContainerStyle}>
          {trendingTvShowsToday.map((item, _i) => (
            <MovieThumb
              url={
                'https://image.tmdb.org/t/p/w300/' + item.poster_path.toString()
              }
            />
          ))}
        </ScrollView>
        <Text style={styles.titleStyle}>Most watched on Netflix this week</Text>
        <ScrollView horizontal style={styles.movieContainerStyle}>
          {trendingTvShowsWeekly.map((item, _i) => (
            <MovieThumb
              url={
                'https://image.tmdb.org/t/p/w300/' + item.poster_path.toString()
              }
            />
          ))}
        </ScrollView>
        <Text style={styles.titleStyle}>Upcoming Movies</Text>
        <ScrollView horizontal style={styles.movieContainerStyle}>
          {upcomingMovies.map((item, _i) => (
            <MovieThumb
              url={
                'https://image.tmdb.org/t/p/w300/' + item.poster_path.toString()
              }
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  mainContentContainerStyle: {
    marginTop: 20,
  },
  movieContainerStyle: {
    marginBottom: 24,
    marginLeft: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  modalSyle: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
export default HomeScreen;
