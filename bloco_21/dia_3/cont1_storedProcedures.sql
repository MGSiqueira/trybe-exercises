-- exemplos
CALL ShowAllActors();

CALL ShowActorsWithSyllable('lope');

CALL ShowAverageRenalDurationOfMovie('AIRPLANE SIERRA', @average_days);
SELECT @average_days;

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL GetNewMovieName(@movie_title);
SELECT @movie_title;

-- para fixar
-- 1
CALL Show10MostPopularActors();

-- 2
CALL ShowMoviesByCategory('Drama');

-- 3
SELECT @CheckStatus;
CALL ShowCustomerStatus('MARY.SMITH@sakilacustomer.org', @CheckStatus);
SELECT @CheckStatus;
