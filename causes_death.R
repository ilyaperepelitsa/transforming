data <- read.table("~/Downloads/full_text.txt", sep = "\t")
colnames(data) <- c("user", "data", "latlon", "lat", "lon", "text")
write.csv(data[,1:5],"~/Downloads/twitter.csv")

spreadsmth <- read.csv("/Users/ilyaperepelitsa/Downloads/leading-causes-of-death-usa/leading_cause_death.csv")
library(dplyr)
library(tidyr)
# install.packages("dplyr")
# install.packages("tidyr")


total <- spreadsmth %>% select(-c(X113_CAUSE_NAME, AADR)) %>% filter(CAUSE_NAME == "All Causes")
colnames(total)[4] <- "TOTAL"
pew <- spreadsmth %>% select(-c(X113_CAUSE_NAME, AADR)) %>% filter(CAUSE_NAME != "All Causes")
# pew1$TOTAL <- as.numeric(pew1$TOTAL)
# pew1$DEATHS <- as.numeric(pew1$DEATHS)

total$TOTAL <- as.numeric(total$TOTAL)
pew$DEATHS <- as.numeric(pew$DEATHS)


str(pew1)

pew1 <- left_join(pew, total, by = c("YEAR", "STATE")) 
pew1 <- pew1 %>%
  group_by(STATE, YEAR) %>%
  mutate(tot = sum(DEATHS)) %>% 
  mutate(share = DEATHS/tot*100) %>% 
  select(-c(CAUSE_NAME.y, TOTAL, tot, DEATHS)) %>% 
  ungroup() %>% 
  group_by(CAUSE_NAME.x) %>% 
  spread(YEAR, share)

%>% 
  select(STATE, YEAR, tot)
pew1$YEAR <- as.factor(pew1$YEAR)
str(pew1)

pew1 %>%
  ungroup() %>% 
  group_by(STATE) %>% 
  spread(YEAR, tot)

total %>% spread(YEAR, TOTAL)


%>% 
  spread(YEAR, TOTAL)
pew1$TOTAL <- as.numeric(pew1$TOTAL)
pew1$DEATHS <- as.numeric(pew1$DEATHS)

pew1 <- pew1 %>% mutate(SHARE = DEATHS/TOTAL)
# %>% group_by(CAUSE_NAME) %>% spread(YEAR, DEATHS)