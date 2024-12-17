package com.northmarket.util;

import java.security.Key;
import java.util.Base64;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

public class JwtSecretGenerator {

    private static final Logger logger = LoggerFactory.getLogger(JwtSecretGenerator.class);

    @SuppressWarnings("deprecation")
    public static void main(String[] args) {
        // Generates the key
        final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String encodedKey = Base64.getEncoder().encodeToString(key.getEncoded());

        // Log the encoded key so will not be printed
        logger.info("Base64 Encoded Secret Key: {}", encodedKey);
    }
}
