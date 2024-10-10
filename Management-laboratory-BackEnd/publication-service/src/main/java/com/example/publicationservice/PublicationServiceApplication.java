package com.example.publicationservice;
import java.time.LocalDateTime;
import java.util.Date;

import com.example.publicationservice.dao.PublicationRepository;
import com.example.publicationservice.entities.Publication;
import com.example.publicationservice.service.IPublicationService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableDiscoveryClient
@AllArgsConstructor
@ComponentScan(basePackages = "com.example.publicationservice")
public class PublicationServiceApplication implements CommandLineRunner {

    IPublicationService publicationService;
    PublicationRepository publicationRepository;

    public static void main(String[] args) {
        SpringApplication.run(PublicationServiceApplication.class, args);}
    public void run(String... args) throws Exception {
        System.out.println("Publication service is running");

        // Example: Create and save a Publication entity
        Publication p1 = new Publication();
        p1.setType("poster");
        p1.setTitre("headline");
        p1.setLien("htctuu");
        p1.setDateApparition(new Date());
        p1.setSourcePdf(" PDF");

        // Save the Publication entity
        publicationService.addPublication(p1);

        Publication p2 = new Publication();
        p2.setType("journal");
        p2.setTitre("xtreem");
        p2.setLien("htpphdbd");
        p2.setDateApparition(new Date());
        p2.setSourcePdf(" PDF");

        // Save the Publication entity
        publicationService.addPublication(p2);
        Publication p = new Publication();
        p.setType("article");
        p.setTitre("cloud ");
        p.setLien("azureMirosoft");
        p.setDateApparition(new Date());
        p.setSourcePdf(" pdf");

        // Save the Publication entity
        publicationService.addPublication(p);



    }

}
