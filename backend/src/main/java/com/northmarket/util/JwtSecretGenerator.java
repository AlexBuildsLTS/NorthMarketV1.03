package com.northmarket.util;

import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Base64;

public class JwtSecretGenerator {

    public static void main(String[] args) {
        // Generate a 256-bit key (32 bytes)
        Key key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);
        String secret = Base64.getEncoder().encodeToString(key.getEncoded());
        System.out.println("Generated JWT Secret Key: " + secret);
    }
}
