package com.example.publicationservice.entities;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NonNull
    private String titre;
    @NonNull
    private String type;
    @Temporal(TemporalType.DATE)
    @NonNull
    private Date dateApparition;
    @NonNull
    private String lien;
    @NonNull
    private String sourcePdf;

}
