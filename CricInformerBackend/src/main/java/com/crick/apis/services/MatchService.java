package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {

    //get All Matches
    List<Match> getAllMatches();

    //get All Live Matches
    List<Match> getLiveMatches();

    //get cwc point table
    List<Map<String,String>> getPointTable();
}
