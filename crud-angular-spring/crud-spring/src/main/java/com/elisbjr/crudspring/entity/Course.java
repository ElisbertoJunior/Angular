package com.elisbjr.crudspring.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.hibernate.validator.constraints.Length;

@Entity
@Getter
@Setter
@SQLDelete(sql = "UPDATE Course SET status = 'Inactive WHERE id = ?")
@Where(clause = "status = 'Active'")
//@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @NotNull
    @Length(min = 5, max = 100)
    @Column(nullable = false, length = 100)
    private String name;


    @NotNull
    @Length(max = 55)
    @Pattern(regexp = "Back-end|Front-end")
    @Column(nullable = false, length = 55)
    private String category;

    @NotNull
    @Length(max = 55)
    @Pattern(regexp = "Active|Inactive")
    @Column(nullable = false, length = 55)
    private String status = "Active";


}
