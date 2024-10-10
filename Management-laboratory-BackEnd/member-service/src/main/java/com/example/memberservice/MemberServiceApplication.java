package com.example.memberservice;

import com.example.memberservice.beans.EvenementBean;
import com.example.memberservice.beans.OutilBean;
import com.example.memberservice.beans.PublicationBean;
import com.example.memberservice.dao.MembreRepository;
import com.example.memberservice.entities.EnseignantChercheur;

import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;



import com.example.memberservice.entities.Etudiant;
import com.example.memberservice.entities.Membre;
import com.example.memberservice.proxies.PublicationProxyService;
import com.example.memberservice.service.IMemberService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Date;
import java.util.List;


@AllArgsConstructor
@SpringBootApplication
@EnableDiscoveryClient

@ComponentScan(basePackages = "com.example.memberservice")
@EnableFeignClients
public class MemberServiceApplication implements CommandLineRunner {
    MembreRepository membreRepository;
    IMemberService iMemberService;
    PublicationProxyService publicationProxyService;
    public static void main(String[] args) {

        SpringApplication.run(MemberServiceApplication.class, args);
    }

        public void run(String... args) throws Exception{



        }

    }

