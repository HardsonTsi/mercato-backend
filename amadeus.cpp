#include<bits/stdc++.h>

#define ASSERT(iDescription, iExpected, iActual) std::cout << std::boolalpha; std::cout << "Line " << std::setfill(' ') << std::setw(3) << __LINE__ << ": "; if (iExpected == iActual) { std::cout << "[PASS] " << iDescription; } else { aRet=1; std::cout << "[FAIL] " << iDescription << "\n" << "  Expected : " << iExpected << "\n" << "  Actual   : " << iActual; } std::cout << std::endl;
int64_t toTimestamp(const std::string& iTime) { std::tm aTime {}; if (!strptime(iTime.c_str(),"%Y-%m-%d %H:%M", &aTime)) { std::cerr << "Invalid time: " << iTime << std::endl; std::exit(1); } return std::mktime(&aTime); }

struct Segment {
    std::string departureCity;
    int64_t     departureTime;  // Unix timestamp (in seconds)
    std::string arrivalCity;
    int64_t     arrivalTime;    // Unix timestamp (in seconds)
};

/***
 * validateContinuityAndTime receives a vector of Segment.
 * You have to check that the travel is continuous (meaning you can physically take all your flights and go back home) and that there is at least 1 hour between the flights.
 ***/

// ### EXERCISE BEGINS

bool validateContinuityAndTime(std::vector<Segment> iSegments) {
    // <Insert your code here> 


    // if the length of segment is one
    // return true

    

    // for each segment
    // 1. compare the departureCity of second segment with the arrivalCity of the first segment
    // if true
    // 2. soustraction of the departureTime of the second segment with the arrivalTime of the first segment
    // if result >= 1
        // we can continue the check with the rest of segment per 2
    // else
    // return false


    return false; // You can remove this return false if needed
}

// ### EXERCISE ENDS

int main()
{
    int aRet = 0;
    ASSERT("Round trip", true, validateContinuityAndTime({
        Segment{
            "CDG", toTimestamp("2024-01-10 17:20"),
            "NCE", toTimestamp("2024-01-10 18:30"),
        },
        Segment{
            "NCE", toTimestamp("2024-01-18 08:00"),
            "CDG", toTimestamp("2024-01-18 09:10"),
        },
    }));

        ASSERT("Another example of round trip", true, validateContinuityAndTime({
        Segment{
            "FRA", toTimestamp("2024-03-25 08:00"),
            "NCE", toTimestamp("2024-03-25 10:30"),
        },
        Segment{
            "NCE", toTimestamp("2024-03-20 11:00"),
            "FRA", toTimestamp("2024-03-20 13:30"),
        },
    }));
    
    ASSERT("not round trip", false, validateContinuityAndTime({
        Segment{
            "NCE", toTimestamp("2024-01-08 08:00"),
            "CDG", toTimestamp("2024-01-08 09:10"),
        },
        Segment{
            "CDG", toTimestamp("2024-01-10 17:20"),
            "FRA", toTimestamp("2024-01-10 18:00"),
        },
    }));
    
    ASSERT("Non continous", false, validateContinuityAndTime({
        Segment{
            "FRA", toTimestamp("2024-01-10 17:20"),
            "NCE", toTimestamp("2024-01-10 19:30"),
        },
        Segment{
            "NCE", toTimestamp("2024-01-08 08:00"),
            "CDG", toTimestamp("2024-01-08 09:10"),
        },
    }));

    ASSERT("Not enough time", false, validateContinuityAndTime({
        Segment{
            "NCE", toTimestamp("2024-01-08 08:00"),
            "CDG", toTimestamp("2024-01-08 09:10"),
        },
        Segment{
            "CDG", toTimestamp("2024-01-08 10:00"),
            "NCE", toTimestamp("2024-01-08 11:10"),
        },
    }));

    ASSERT("Another example of not enough time", false, validateContinuityAndTime({
        Segment{
            "NCE", toTimestamp("2024-01-08 08:00"),
            "CDG", toTimestamp("2024-01-08 09:10"),
        },
        Segment{
            "CDG", toTimestamp("2024-01-08 10:00"),
            "FRA", toTimestamp("2024-01-08 11:10"),
        },
        Segment{
            "FRA", toTimestamp("2024-01-13 12:00"),
            "NDC", toTimestamp("2024-01-13 14:10"),
        },
    }));
    
    ASSERT("Not continious", false, validateContinuityAndTime({
        Segment{
            "NCE", toTimestamp("2024-01-08 08:00"),
            "CDG", toTimestamp("2024-01-08 09:10"),
        },
        Segment{
            "CDG", toTimestamp("2024-01-10 10:00"),
            "NCE", toTimestamp("2024-01-10 11:10"),
        },
        Segment{
            "NCE", toTimestamp("2024-01-09 08:00"),
            "CDG", toTimestamp("2024-01-09 09:10"),
        },
    }));

    ASSERT("complex continous round trip", true, validateContinuityAndTime({
        Segment{
            "FRA", toTimestamp("2024-01-11 14:00"),
            "NCE", toTimestamp("2024-01-11 15:00"),
        },
        Segment{
            "NCE", toTimestamp("2024-01-05 09:40"),
            "CDG", toTimestamp("2024-01-05 10:50"),
        },
        Segment{
            "JFK", toTimestamp("2024-01-10 08:00"),
            "LHR", toTimestamp("2024-01-10 15:30"),
        },
        Segment{
            "CDG", toTimestamp("2024-01-05 12:00"),
            "JFK", toTimestamp("2024-01-05 16:00"),
        },
        Segment{
            "LHR", toTimestamp("2024-01-11 11:20"),
            "FRA", toTimestamp("2024-01-11 12:00"),
        },
    }));

    return aRet;
}